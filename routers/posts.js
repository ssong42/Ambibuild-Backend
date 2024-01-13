const { Router } = require("express");
const bodyParser = require('body-parser');
const pool = require('../db'); // Import the database connection
const router = Router();

// Parse JSON request bodies
router.use(bodyParser.json());

// API to fetch posts with associated user information
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        posts.post_id,
        posts.title,
        posts.description,
        posts.photo_url,
        users.username AS user_username
      FROM
        posts
      LEFT JOIN
        users ON posts.user_id = users.user_id
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    const result = await pool.query(`
      SELECT
        posts.post_id,
        posts.title,
        posts.description,
        posts.photo_url,
        users.username AS user_username
      FROM
        posts
      LEFT JOIN
        users ON posts.user_id = users.user_id
      WHERE
        posts.post_id = $1
    `, [postId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to create a new post
router.post('/', async (req, res) => {
  const { user_id, title, description, photo_url } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO posts (user_id, title, description, photo_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, title, description, photo_url]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to update a post
router.put('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const { title, description, photo_url } = req.body;

  try {
    const result = await pool.query(
      'UPDATE posts SET title = $1, description = $2, photo_url = $3 WHERE post_id = $4 RETURNING *',
      [title, description, photo_url, postId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  
module.exports = router;