# /// script
# requires-python = ">=3.11"
# dependencies = []
# ///
"""Bucket each handle's lifetime merged PRs by repo owner.

Run from a machine with `gh` CLI authenticated and network access:

    uv run --script discount-affiliated-prs.py

Prints, per handle:
  - total merged PRs returned by the GraphQL connection
  - count to self-owned repos
  - count to each affiliated org (per the discount table)
  - count to everything else (the post-discount "external" number)
  - the top ten repo owners so you can sanity-check

Pipe to a file if you want to keep the breakdown:

    uv run --script discount-affiliated-prs.py > affiliation-breakdown.txt
"""

from __future__ import annotations

import json
import subprocess
import sys
from collections import Counter

DISCOUNT_TABLE: dict[str, list[str]] = {
    "nonprofittechy": ["SuffolkLITLab"],
    "damienriehl": ["alea-institute"],
    "adelevie": ["18F"],
    "batemapf": ["18F"],
    "dpp": ["lift", "liftweb"],
    "compleatang": ["eris-ltd", "monax-io"],
    "benbalter": ["github"],
}

QUERY = """
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
      nodes {
        repository {
          owner { login }
          nameWithOwner
        }
      }
    }
  }
}
"""


def gh_query(login: str, cursor: str | None) -> dict:
    args = ["gh", "api", "graphql", "-f", f"query={QUERY}", "-F", f"login={login}"]
    if cursor:
        args.extend(["-F", f"cursor={cursor}"])
    result = subprocess.run(args, capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def fetch_all_merged_prs(handle: str, max_pages: int = 20) -> tuple[list[dict], int]:
    prs: list[dict] = []
    cursor: str | None = None
    total = 0
    for _ in range(max_pages):
        data = gh_query(handle, cursor)
        page = data["data"]["user"]["pullRequests"]
        total = page.get("totalCount", total)
        prs.extend(page["nodes"])
        if not page["pageInfo"]["hasNextPage"]:
            break
        cursor = page["pageInfo"]["endCursor"]
    return prs, total


def report(handle: str, affiliated: list[str]) -> None:
    try:
        prs, total = fetch_all_merged_prs(handle)
    except subprocess.CalledProcessError as exc:
        print(f"\n[{handle}] ERROR: {exc.stderr.strip()}", file=sys.stderr)
        return

    owners = Counter(pr["repository"]["owner"]["login"] for pr in prs)
    self_count = owners.get(handle, 0)
    affil_count = sum(owners.get(org, 0) for org in affiliated)
    external = len(prs) - self_count - affil_count

    print(f"\n[{handle}]  reported total merged PRs: {total}  fetched: {len(prs)}")
    print(f"  excluding orgs: {affiliated}")
    print(f"  self ({handle}):                  {self_count}")
    for org in affiliated:
        print(f"  affiliated ({org}):" + " " * (24 - len(org)) + f"{owners.get(org, 0)}")
    print(f"  external (post-discount):       {external}")
    print(f"  top 10 owners:")
    for owner, n in owners.most_common(10):
        flag = ""
        if owner == handle:
            flag = " [self]"
        elif owner in affiliated:
            flag = " [affiliated]"
        print(f"    {owner:30s} {n:5d}{flag}")


def main() -> None:
    print("Querying GitHub for each handle's merged PRs (will hit api.github.com).")
    print("=" * 72)
    for handle, affiliated in DISCOUNT_TABLE.items():
        report(handle, affiliated)
    print("\nDone.")


if __name__ == "__main__":
    main()
