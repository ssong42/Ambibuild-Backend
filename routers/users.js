const { Router } = require("express");
const pool = require('../db'); // Import the database connection
const router = Router();

// Get all available items
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  });

// Endpoint to fetch a user by ID
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Endpoint to update a user
  router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { username, email } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *',
      [username, email, userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;