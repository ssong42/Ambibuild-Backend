-- Insert users
INSERT INTO users (username, email) VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');

-- Insert posts
INSERT INTO posts (user_id, title, description) VALUES
  (1, 'Minimal Budget Build', 'This build is created with minimalism and budget in mind. Here are the products I used...'),
  (2, 'Elegant Scandinavian Design', 'Embrace the simplicity and elegance of Scandinavian design in your home office. Learn how to create a serene workspace inspired by Nordic aesthetics.'),
  (3, 'DIY Standing Desk', 'Tired of sitting all day? Transform your workspace with a DIY standing desk. Discover easy-to-follow instructions and materials to create a healthier office setup.'),
  (1, 'Tech-Savvy Home Office Setup', 'Upgrade your home office with the latest tech gadgets and accessories. From smart lighting to ergonomic chairs, this setup has everything you need for a productive workday.'),
  (2, 'Cozy Corner Workspace', 'Create a cozy and inviting corner workspace in your home. Get inspired by warm colors, soft textures, and personalized decor to make your workspace feel like a sanctuary.'),
  (3, 'Productivity Hacks for Remote Work', 'Boost your productivity while working remotely with these simple yet effective hacks. From time management techniques to ergonomic workspace tips, you\`ll learn how to stay focused and efficient.'),
  (1, 'Rustic Home Office Decor', 'Transform your home office into a rustic retreat with vintage-inspired decor and natural elements. Create a cozy atmosphere that inspires creativity and productivity.'),
  (2, 'Modern Minimalist Workspace', 'Simplify your workspace with a modern minimalist design. Clean lines, neutral colors, and clutter-free surfaces create a calm and focused environment for work.'),
  (3, 'Urban Industrial Office Setup', 'Embrace industrial chic in your home office with urban-inspired decor and utilitarian design. Combine raw materials, exposed brick, and metal accents for an edgy and stylish workspace.'),
  (1, 'Sustainable Home Office Solutions', 'Go green with sustainable home office solutions. From eco-friendly furniture to energy-efficient lighting, discover eco-conscious ways to create a planet-friendly workspace.'),
  (2, 'Vintage Home Office Makeover', 'Give your home office a vintage makeover with retro-inspired decor and antique furniture. Add character and charm to your workspace with timeless pieces and nostalgic touches.'),
  (3, 'Artistic Bohemian Workspace', 'Express your creativity with an artistic bohemian workspace. Mix and match patterns, colors, and textures to create a vibrant and eclectic home office that inspires imagination and innovation.');
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