const { Router } = require("express");
const bodyParser = require('body-parser');
const pool = require('../db'); // Import the database connection
const router = Router();

// Parse JSON request bodies
router.use(bodyParser.json());

// API to fetch posts with associated user information
router.get('/posts', async (req, res) => {
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

  
module.exports = router;