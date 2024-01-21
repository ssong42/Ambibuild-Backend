-- Create 'photos' table
CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(post_id),
    photo_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Remove 'photo_url' column from the 'posts' table
ALTER TABLE posts
DROP COLUMN photo_url;