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

-- Insert posts
INSERT INTO photos (photo_id, post_id, photo_url) VALUES
  (1, 1, '1705869868856-IMG_4627.jpg'),
  (2, 2, '1705869868859-IMG_3713.jpg'),
  (3, 3, '1705871131326-IMG_4627.jpg');
