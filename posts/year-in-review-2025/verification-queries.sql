-- ============================================
-- SQL QUERIES TO VERIFY AI COVERAGE SHIFT
-- Evolution of our analytical approach
-- ============================================
-- Project: Year in Review 2025 - AI Coverage Analysis
-- Database: data.zeeker.sg
-- Date Started: December 28, 2025
-- Total Articles Found: 27 AI/legal tech articles (Apr-Dec 2025)
-- Key Finding: October 3, 2025 as inflection point

-- ============================================
-- ITERATION 1: Initial attempt (TOO NARROW)
-- ============================================
-- Problem: Using '%AI%' caught false positives like "flail", "Thailand", "available"
-- Result: Only 13 articles found
-- Lesson: Word boundaries matter; need more specific search terms

/*
SELECT
  strftime('%Y-%m', date) as month,
  COUNT(*) as ai_articles
FROM headlines
WHERE (summary LIKE '%AI%'  -- ❌ Too broad!
   OR summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR title LIKE '%AI%'
   OR title LIKE '%artificial intelligence%')
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
GROUP BY strftime('%Y-%m', date)
ORDER BY month;
*/

-- ============================================
-- ITERATION 2: Expanded search terms (WORKED!)
-- ============================================
-- Change: Removed standalone '%AI%', added legal tech terms
-- Result: 27 articles found - much more complete
-- Lesson: Include related terms (ChatGPT, LLM, legal tech, deepfake, hallucination)

-- QUERY 1a: Count AI articles by month (FINAL VERSION)
SELECT
  strftime('%Y-%m', date) as month,
  COUNT(*) as ai_articles
FROM headlines
WHERE (
   summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR summary LIKE '%ChatGPT%'
   OR summary LIKE '%GPT%'
   OR summary LIKE '%LLM%'
   OR summary LIKE '%large language model%'
   OR summary LIKE '%machine learning%'
   OR summary LIKE '%deepfake%'
   OR summary LIKE '%hallucination%'
   OR summary LIKE '%AI-generated%'
   OR summary LIKE '%AI-assisted%'
   OR summary LIKE '%legal tech%'
   OR summary LIKE '%legaltech%'
   OR title LIKE '%artificial intelligence%'
   OR title LIKE '%GenAI%'
   OR title LIKE '%ChatGPT%'
)
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
GROUP BY strftime('%Y-%m', date)
ORDER BY month;

-- ============================================
-- ITERATION 3: Get article content for manual classification
-- ============================================
-- Discovery: Volume shift wasn't dramatic (Q2: 9, Q4: 11)
-- Real shift: TONE changed from adoption to accountability
-- Method: Manual classification of all 27 articles

-- QUERY 2: Get all AI-related articles with summaries
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE (
   summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR summary LIKE '%ChatGPT%'
   OR summary LIKE '%GPT%'
   OR summary LIKE '%LLM%'
   OR summary LIKE '%large language model%'
   OR summary LIKE '%machine learning%'
   OR summary LIKE '%deepfake%'
   OR summary LIKE '%hallucination%'
   OR summary LIKE '%AI-generated%'
   OR summary LIKE '%AI-assisted%'
   OR summary LIKE '%legal tech%'
   OR summary LIKE '%legaltech%'
   OR title LIKE '%artificial intelligence%'
   OR title LIKE '%GenAI%'
   OR title LIKE '%ChatGPT%'
)
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
ORDER BY date;

-- ============================================
-- KEY FINDING: October 3, 2025 watershed moment
-- ============================================
-- Before Oct 3: 15 articles (89% adoption-focused)
-- After Oct 3: 12 articles (82% accountability-focused)
-- The inflection point: $800 fine for AI hallucination

-- QUERY 3: Find the watershed article
SELECT
  date,
  title,
  summary,
  url
FROM headlines
WHERE date = '2025-10-03'
  AND (summary LIKE '%800%'
    OR summary LIKE '%fine%'
    OR summary LIKE '%AI%'
    OR summary LIKE '%citation%'
    OR summary LIKE '%hallucin%');

-- ============================================
-- ITERATION 4: Keyword frequency analysis (FINAL APPROACH)
-- ============================================
-- Goal: Visualize the shift with concrete data
-- Method: Count adoption vs accountability keywords month-by-month
-- Use: Creates timeline graphic showing keyword crossover around Oct 3

-- QUERY 4: Monthly keyword timeline (HOOK GRAPHIC DATA)
-- Tracks both adoption and accountability keywords across full timeframe
SELECT
  strftime('%Y-%m', date) as month,
  COUNT(*) as total_ai_articles,

  -- ADOPTION KEYWORDS (should peak early May, decline later)
  SUM(CASE WHEN text LIKE '%training%' OR text LIKE '%programme%' OR text LIKE '%program%' THEN 1 ELSE 0 END) as training_program,
  SUM(CASE WHEN text LIKE '%adoption%' OR text LIKE '%adopt%' THEN 1 ELSE 0 END) as adoption,
  SUM(CASE WHEN text LIKE '%innovation%' OR text LIKE '%innovative%' THEN 1 ELSE 0 END) as innovation,
  SUM(CASE WHEN text LIKE '%efficiency%' OR text LIKE '%productive%' THEN 1 ELSE 0 END) as efficiency,
  SUM(CASE WHEN text LIKE '%opportunity%' OR text LIKE '%opportunities%' THEN 1 ELSE 0 END) as opportunity,
  SUM(CASE WHEN text LIKE '%launched%' OR text LIKE '%launch%' THEN 1 ELSE 0 END) as launch,

  -- ACCOUNTABILITY KEYWORDS (should be low early, spike Oct+)
  SUM(CASE WHEN text LIKE '%accountab%' OR text LIKE '%liable%' OR text LIKE '%liability%' THEN 1 ELSE 0 END) as accountability,
  SUM(CASE WHEN text LIKE '%discipline%' OR text LIKE '%disciplinary%' THEN 1 ELSE 0 END) as discipline,
  SUM(CASE WHEN text LIKE '%sanction%' OR text LIKE '%penalty%' OR text LIKE '%fine%' THEN 1 ELSE 0 END) as sanctions,
  SUM(CASE WHEN text LIKE '%verif%' OR text LIKE '%verify%' THEN 1 ELSE 0 END) as verification,
  SUM(CASE WHEN text LIKE '%duty%' OR text LIKE '%obligation%' OR text LIKE '%must%' THEN 1 ELSE 0 END) as duty_obligation,
  SUM(CASE WHEN text LIKE '%oversight%' OR text LIKE '%supervis%' THEN 1 ELSE 0 END) as oversight,
  SUM(CASE WHEN text LIKE '%misuse%' OR text LIKE '%breach%' THEN 1 ELSE 0 END) as misuse,
  SUM(CASE WHEN text LIKE '%sack%' OR text LIKE '%dismiss%' THEN 1 ELSE 0 END) as dismissal

FROM headlines
WHERE (
   summary LIKE '%artificial intelligence%'
   OR summary LIKE '%GenAI%'
   OR summary LIKE '%generative AI%'
   OR summary LIKE '%ChatGPT%'
   OR summary LIKE '%GPT%'
   OR summary LIKE '%LLM%'
   OR summary LIKE '%machine learning%'
   OR summary LIKE '%deepfake%'
   OR summary LIKE '%hallucination%'
   OR summary LIKE '%AI-generated%'
   OR summary LIKE '%legal tech%'
   OR title LIKE '%artificial intelligence%'
   OR title LIKE '%GenAI%'
)
  AND date >= '2025-04-01'
  AND date < '2026-01-01'
GROUP BY strftime('%Y-%m', date)
ORDER BY month;

-- ============================================
-- SUPPORTING QUERIES: Verify specific events
-- ============================================

-- QUERY 5: Key adoption milestones
SELECT date, title, summary, url FROM headlines
WHERE date IN ('2025-05-22', '2025-09-12')  -- SAL training, GPT-Legal launch
  AND (summary LIKE '%GenAI%' OR summary LIKE '%GPT%' OR summary LIKE '%SAL%')
ORDER BY date;

-- QUERY 6: Professional discipline cases (Oct-Dec)
SELECT date, title, summary, url FROM headlines
WHERE date >= '2025-10-03'
  AND date < '2026-01-01'
  AND (
    summary LIKE '%disciplin%'
    OR summary LIKE '%sanction%'
    OR summary LIKE '%fine%'
    OR summary LIKE '%sack%'
    OR summary LIKE '%fabricat%'
    OR summary LIKE '%fictitious%'
  )
  AND (summary LIKE '%AI%' OR summary LIKE '%GenAI%' OR summary LIKE '%hallucin%')
ORDER BY date;

-- ============================================
-- LESSONS LEARNED
-- ============================================
-- 1. Search term precision matters - avoid false positives
-- 2. Volume alone doesn't tell the story - analyze tone
-- 3. Manual classification essential for nuanced understanding
-- 4. Specific dates matter - October 3 was the pivot point
-- 5. Keyword frequency can visualize qualitative shifts
-- 6. Use article TEXT not summary for keyword counts

-- ============================================
-- USAGE RECOMMENDATIONS
-- ============================================
-- For hook graphic: Run Query 4, visualize adoption vs accountability keywords
-- For verification: Run Query 2, manually classify all 27 articles
-- For timeline: Use Query 5 & 6 to identify key milestone articles
-- For methodology section: Show evolution from Query 1 → Query 1a → Query 4

-- ============================================
-- DATA INTEGRITY NOTES
-- ============================================
-- Articles analyzed: 27
-- Time period: April 1 - December 31, 2025
-- Before Oct 3: 15 articles
-- After Oct 3: 12 articles
-- Inflection point: October 3, 2025 ($800 fine case)
-- Peak adoption coverage: May 2025 (6 articles)
-- Peak accountability coverage: November 2025 (5 articles)
