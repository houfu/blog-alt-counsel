-- SQL Queries to Verify AI Coverage Shift Storyline
-- Run these against data.zeeker.sg database
-- Date: December 28, 2025

-- ============================================
-- QUERY 1: Count AI articles by month
-- ============================================
SELECT
  strftime('%Y-%m', date) as month,
  COUNT(*) as ai_articles
FROM headlines
WHERE (summary LIKE '%AI%'
   OR summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR title LIKE '%AI%'
   OR title LIKE '%artificial intelligence%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
GROUP BY strftime('%Y-%m', date)
ORDER BY month;

-- ============================================
-- QUERY 2: Get all AI-related articles with full text
-- (For manual classification into adoption vs accountability)
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE (summary LIKE '%AI%'
   OR summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR title LIKE '%AI%'
   OR title LIKE '%artificial intelligence%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
ORDER BY date;

-- ============================================
-- QUERY 3: Find the $800 fine article
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE (summary LIKE '%800%' OR summary LIKE '%fine%' OR summary LIKE '%sanction%')
  AND (summary LIKE '%AI%' OR summary LIKE '%citation%' OR summary LIKE '%hallucin%')
  AND date >= '2025-06-01'
  AND date < '2025-09-01'
ORDER BY date;

-- ============================================
-- QUERY 4: Adoption keywords (April-September)
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE date >= '2025-04-01'
  AND date < '2025-10-01'
  AND (summary LIKE '%AI%' OR title LIKE '%AI%')
  AND (summary LIKE '%training%'
    OR summary LIKE '%program%'
    OR summary LIKE '%adoption%'
    OR summary LIKE '%efficiency%'
    OR summary LIKE '%innovation%'
    OR summary LIKE '%opportunity%'
    OR summary LIKE '%LIFT%'
    OR summary LIKE '%upskill%')
ORDER BY date;

-- ============================================
-- QUERY 5: Accountability keywords (October-December)
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE date >= '2025-10-01'
  AND date < '2026-01-01'
  AND (summary LIKE '%AI%' OR title LIKE '%AI%')
  AND (summary LIKE '%accountab%'
    OR summary LIKE '%discipline%'
    OR summary LIKE '%sanction%'
    OR summary LIKE '%fine%'
    OR summary LIKE '%penalty%'
    OR summary LIKE '%risk%'
    OR summary LIKE '%compliance%'
    OR summary LIKE '%verification%'
    OR summary LIKE '%hallucin%')
ORDER BY date;

-- ============================================
-- QUERY 6: Key dates from timeline
-- ============================================
-- April 17: AI translation
SELECT date, title, summary, url FROM headlines
WHERE date = '2025-04-17' AND (summary LIKE '%AI%' OR summary LIKE '%translation%');

-- May 12: LIFT program
SELECT date, title, summary, url FROM headlines
WHERE date = '2025-05-12' AND (summary LIKE '%LIFT%' OR summary LIKE '%training%');

-- May 22: GenAI training
SELECT date, title, summary, url FROM headlines
WHERE date = '2025-05-22' AND summary LIKE '%GenAI%';

-- ============================================
-- QUERY 7: Count by quarter with keywords
-- ============================================
SELECT
  CASE
    WHEN strftime('%m', date) IN ('04','05','06') THEN 'Q2-2025'
    WHEN strftime('%m', date) IN ('07','08','09') THEN 'Q3-2025'
    WHEN strftime('%m', date) IN ('10','11','12') THEN 'Q4-2025'
  END as quarter,
  COUNT(*) as total_ai_articles,
  SUM(CASE WHEN (summary LIKE '%training%' OR summary LIKE '%adoption%' OR summary LIKE '%efficiency%' OR summary LIKE '%innovation%') THEN 1 ELSE 0 END) as adoption_focused,
  SUM(CASE WHEN (summary LIKE '%accountab%' OR summary LIKE '%discipline%' OR summary LIKE '%sanction%' OR summary LIKE '%risk%' OR summary LIKE '%compliance%') THEN 1 ELSE 0 END) as accountability_focused
FROM headlines
WHERE (summary LIKE '%AI%' OR title LIKE '%AI%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
GROUP BY quarter
ORDER BY quarter;

-- ============================================
-- QUERY 8: SAL (Singapore Academy of Law) AI mentions
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE (summary LIKE '%SAL%' OR summary LIKE '%Singapore Academy%')
  AND (summary LIKE '%AI%' OR summary LIKE '%GenAI%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
ORDER BY date;

-- ============================================
-- QUERY 9: Law firm AI policy mentions
-- ============================================
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE (summary LIKE '%firm%' OR summary LIKE '%law firm%')
  AND summary LIKE '%AI%'
  AND (summary LIKE '%policy%' OR summary LIKE '%sack%' OR summary LIKE '%dismiss%' OR summary LIKE '%breach%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
ORDER BY date;

-- ============================================
-- USAGE NOTES:
-- ============================================
-- 1. Run Query 7 first to verify the Q2 vs Q4 shift exists
-- 2. Run Query 3 to find the $800 fine article (critical anchor point)
-- 3. Run Queries 4 & 5 to get adoption vs accountability articles
-- 4. Run Query 2 to get ALL AI articles for manual review
-- 5. Use Query 6 to verify specific dates from the timeline
