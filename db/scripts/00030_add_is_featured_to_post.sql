-- Add is_featured column to posts table
ALTER TABLE posts
ADD COLUMN is_featured BOOLEAN DEFAULT FALSE;

UPDATE posts
SET is_featured = TRUE
WHERE post_id IN (1, 2, 3); 