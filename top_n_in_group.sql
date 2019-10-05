-- select where the rank is the first!
SELECT *
FROM (
   -- rank them by count and partition by year
   SELECT occupation, year, occupation_count,
   RANK () OVER (
      PARTITION BY year 
      ORDER BY occupation_count DESC
   ) occupation_count_rank
   FROM (
      -- get the year, the count, and the occupation
      SELECT occupation, year, COUNT(occupation) as occupation_count
      FROM 
      shows 
      GROUP BY year, occupation
   )
   GROUP BY year, occupation
)
WHERE occupation_count_rank = 1;
-- or, for the top three:
-- WHERE occupation_count_rank IN (1, 2, 3); 
