# /// script
# requires-python = ">=3.11"
# ///
"""Query a new handle's full stats for adding to the lawyer-coder dataset.

Usage examples:

    uv run --script query-new-handle.py mjbommar \\
        --population active_veteran \\
        --affiliated alea-institute LexPredict

Prints the user's createdAt and lifetime PR counts, the merged-PR breakdown
by repo owner (so we can sanity-check the affiliated org logins), the raw
non-self count, and the post-discount external count. Outputs a TSV row
ready to append to raw/lawyer-coder-pr-scatter.tsv plus the discount entry
to add to gen_beeswarm.py.

If LexPredict's actual org login is different (e.g. case-sensitive), the
top-owners listing will show what to use; rerun with the correct login.
"""

from __future__ import annotations

import argparse
import json
import subprocess
from collections import Counter
from datetime import datetime, timezone

QUERY_META = """
query($login: String!) {
  user(login: $login) {
    createdAt
    pullRequests(states: [OPEN, CLOSED, MERGED]) {
      totalCount
    }
  }
}
"""

QUERY_MERGED = """
query($login: String!, $cursor: String) {
  user(login: $login) {
    pullRequests(
      first: 100
      states: MERGED
      after: $cursor
      orderBy: {field: CREATED_AT, direction: DESC}
    ) {
      pageInfo { hasNextPage endCursor }
      totalCount
      nodes { repository { owner { login } } }
    }
  }
}
"""


def gh(query: str, **variables) -> dict:
    args = ["gh", "api", "graphql", "-f", f"query={query}"]
    for k, v in variables.items():
        if v is None:
            continue
        args.extend(["-F", f"{k}={v}"])
    result = subprocess.run(args, capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("handle", help="GitHub login to add")
    parser.add_argument(
        "--population",
        default="active_veteran",
        choices=["legalquants", "lawyersongithub", "active_veteran"],
    )
    parser.add_argument(
        "--affiliated",
        nargs="*",
        default=[],
        help="Org logins to discount as affiliated work",
    )
    args = parser.parse_args()

    handle = args.handle
    affiliated = args.affiliated

    # Metadata
    meta = gh(QUERY_META, login=handle)
    user = meta["data"]["user"]
    created_at = user["createdAt"]
    lifetime_prs = user["pullRequests"]["totalCount"]

    created = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
    reference = datetime(2026, 5, 9, tzinfo=timezone.utc)
    years = (reference - created).days / 365.25

    # Paginated merged PRs
    cursor = None
    nodes: list = []
    lifetime_merged = 0
    for _ in range(25):
        page_result = gh(QUERY_MERGED, login=handle, cursor=cursor)
        page = page_result["data"]["user"]["pullRequests"]
        lifetime_merged = page["totalCount"]
        nodes.extend(page["nodes"])
        if not page["pageInfo"]["hasNextPage"]:
            break
        cursor = page["pageInfo"]["endCursor"]

    owners = Counter(n["repository"]["owner"]["login"] for n in nodes)
    self_count = owners.get(handle, 0)
    affil_count = sum(owners.get(o, 0) for o in affiliated)
    raw_non_self = lifetime_merged - self_count
    discounted_external = lifetime_merged - self_count - affil_count

    print(f"\n[{handle}]  population: {args.population}")
    print(f"  createdAt:        {created_at}")
    print(f"  years_active:     {years:.2f}")
    print(f"  filed (lifetime): {lifetime_prs}")
    print(f"  merged total:     {lifetime_merged} (fetched {len(nodes)})")
    print(f"  self:             {self_count}")
    for org in affiliated:
        print(f"  {org} (affiliated): {owners.get(org, 0)}")
    print(f"  raw non-self:     {raw_non_self}")
    print(f"  post-discount:    {discounted_external}")
    print()
    print("  top 15 owners:")
    for owner, n in owners.most_common(15):
        flag = ""
        if owner == handle:
            flag = " [self]"
        elif owner in affiliated:
            flag = " [affiliated]"
        print(f"    {owner:30s} {n:5d}{flag}")
    print()

    prs_per_year = lifetime_prs / years
    non_self_per_year_raw = raw_non_self / years
    non_self_per_year_disc = discounted_external / years
    print("=" * 70)
    print("# Append this row to raw/lawyer-coder-pr-scatter.tsv:")
    print(
        f"{handle}\t{args.population}\t{created_at}\t{years:.2f}\t"
        f"{lifetime_prs}\t{lifetime_merged}\t{raw_non_self}\t"
        f"{prs_per_year:.2f}\t{non_self_per_year_raw:.2f}"
    )
    print()
    print("# Discount entry for gen_beeswarm.py:")
    print(f'    "{handle}": {non_self_per_year_disc:.2f},')


if __name__ == "__main__":
    main()
