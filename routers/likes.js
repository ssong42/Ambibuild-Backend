// likesRouter.js
const express = require('express');
const bodyParser = require("body-parser");
const pool = require('../db'); // Import the database connection

const router = express.Router();
router.use(bodyParser.json());

// Endpoint to create a new like
router.post('/', async (req, res) => {
  const { user_id, post_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *',
      [user_id, post_id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating like:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to disable a like
router.put('/disable/:likeId', async (req, res) => {
  const likeId = req.params.likeId;

  try {
    const result = await pool.query(
      'UPDATE likes SET is_disabled = true WHERE like_id = $1 RETURNING *',
      [likeId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Like not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error disabling like:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... Other routes ...

module.exports = router;