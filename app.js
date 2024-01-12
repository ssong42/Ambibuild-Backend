const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// routes
const posts = require('./routers/posts');
const users = require('./routers/users');

app.use(posts);
app.use(users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).send({ error: 'Unauthorized' });
//   }

//   const authRecord = await db.query('SELECT * FROM auth WHERE token = $1', [token]);

//   if (authRecord.rowCount === 0) {
//     return res.status(401).send({ error: 'Invalid token' });
//   }

//   const { expired_at, used } = authRecord.rows[0];

//   if (new Date(expired_at) < new Date() || used) {
//     return res.status(401).send({ error: 'Expired or used token' });
//   }

//   const { user_id } = authRecord.rows[0];
//   req.user_id = user_id;

//   await db.query('UPDATE auth SET used = true WHERE token = $1', [token]);

//   next();
// };


// app.get('/protected', authMiddleware, async (req, res) => {
//   // Handle protected route here
// });
