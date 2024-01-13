-- Insert users
INSERT INTO users (username, email) VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');

-- Insert posts
INSERT INTO posts (user_id, title, description, photo_url) VALUES
  (1, 'Post Title 1', 'Description for post 1', 'photo1.jpg'),
  (2, 'Post Title 2', 'Description for post 2', 'photo2.jpg'),
  (3, 'Post Title 3', 'Description for post 3', 'photo3.jpg');

-- Insert likes
INSERT INTO likes (user_id, post_id, is_disabled) VALUES
  (1, 1, false),
  (2, 1, false),
  (3, 2, false),
  (1, 3, false);

-- Insert comments
INSERT INTO comments (user_id, post_id, content) VALUES
  (1, 1, 'Comment on post 1'),
  (2, 1, 'Another comment on post 1'),
  (3, 2, 'Comment on post 2'),
  (1, 3, 'Comment on post 3');