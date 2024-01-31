const { Router } = require("express");
const bodyParser = require("body-parser");
const pool = require("../db"); // Import the database connection
const router = Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Parse JSON request bodies
router.use(bodyParser.json());

// API to fetch posts with associated user information
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT p.*, u.username, array_agg(ph.photo_url) AS photo_urls, COUNT(l.like_id) AS like_count FROM  posts p LEFT JOIN  photos ph ON p.post_id = ph.post_id LEFT JOIN  users u ON p.user_id = u.user_id LEFT JOIN  likes l ON p.post_id = l.post_id GROUP BY  p.post_id, u.user_id ORDER BY  p.created_at DESC'
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch featured builds
router.get('/featured', async (req, res) => {
  try {
    // Query database for featured builds
    const featuredBuilds = await pool.query('SELECT p.*, u.username, array_agg(ph.photo_url) AS photo_urls, COUNT(l.like_id) AS like_count FROM  posts p LEFT JOIN  photos ph ON p.post_id = ph.post_id LEFT JOIN  users u ON p.user_id = u.user_id LEFT JOIN  likes l ON p.post_id = l.post_id where p.is_featured = true GROUP BY  p.post_id, u.user_id ORDER BY  p.created_at DESC');

    // Return featured builds as JSON response
    res.json(featuredBuilds.rows);
  } catch (error) {
    console.error('Error fetching featured builds:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  console.log(postId);
  try {
    const result = await pool.query(
      "SELECT p.*, u.user_id, array_agg(ph.photo_url) AS photo_urls, COUNT(l.like_id) AS like_count  FROM posts p LEFT JOIN users u ON p.user_id = u.user_id LEFT JOIN photos ph ON p.post_id = ph.post_id LEFT JOIN likes l ON p.post_id = l.post_id WHERE p.post_id = $1 GROUP BY p.post_id, u.user_id",
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error retrieving post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Endpoint to update a post
router.put("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const { title, description, photo_url } = req.body;

  try {
    const result = await pool.query(
      "UPDATE posts SET title = $1, description = $2, photo_url = $3 WHERE post_id = $4 RETURNING *",
      [title, description, photo_url, postId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Post not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", upload.array("photos", 3), async (req, res) => {
  console.log(req.files);

  const { user_id, title, description } = req.body;

  try {
    const postResult = await pool.query(
      "INSERT INTO posts (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
      [user_id, title, description]
    );

    const postId = postResult.rows[0].post_id;

    // Insert into the 'photos' table for each uploaded photo
    for (const file of req.files) {
      const photoResult = await pool.query(
        "INSERT INTO photos (post_id, photo_url) VALUES ($1, $2) RETURNING *",
        [postId, file.filename]
      );

      console.log("Inserted photo:", photoResult.rows[0]);
    }

    res.json(postResult.rows[0]);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
