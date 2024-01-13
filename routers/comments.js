// commentsRouter.js
const express = require('express');
const pool = require('../db'); // Import the database connection

const router = express.Router();

// Endpoint to create a new comment
router.post('/', async (req, res) => {
  const { user_id, post_id, content } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO comments (user_id, post_id, content) VALUES ($1, $2, $3) RETURNING *',
      [user_id, post_id, content]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;