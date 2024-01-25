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

-- Insert photos
INSERT INTO photos (post_id, photo_url) VALUES
    (1, 'basic-setup.webp'),
    (2, 'cool-setup.webp'),
    (3, 'cool-setup2.webp'),
    (4, 'cool-setup3.webp'),
    (5, 'dark-setup.webp'),
    (6, 'dark-setup2.webp'),
    (7, 'minimal-setup.jpeg'),
    (8, 'minimal-setup2.webp'),
    (9, 'nature-setup.webp'),
    (10, 'organized-setup.webp'),
    (11, 'red-setup1.webp'),
    (12, 'white-setup.webp');
