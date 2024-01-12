-- Insert random users
INSERT INTO users (username, email) VALUES
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com'),
    ('user3', 'user3@example.com');

-- Insert random posts
INSERT INTO posts (user_id, title, description, photo_url) VALUES
    (1, 'Post 1', 'Description for Post 1', 'photo1.jpg'),
    (2, 'Post 2', 'Description for Post 2', 'photo2.jpg'),
    (3, 'Post 3', 'Description for Post 3', 'photo3.jpg');

-- Insert random likes
INSERT INTO likes (user_id, post_id) VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (1, 3);

-- Insert random comments
INSERT INTO comments (user_id, post_id, content) VALUES
    (1, 1, 'Comment on Post 1 by User 1'),
    (2, 1, 'Comment on Post 1 by User 2'),
    (3, 2, 'Comment on Post 2 by User 3'),
    (1, 3, 'Comment on Post 3 by User 1');