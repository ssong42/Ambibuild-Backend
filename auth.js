const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
  
    const authRecord = await db.query('SELECT * FROM auth WHERE token = $1', [token]);
  
    if (authRecord.rowCount === 0) {
      return res.status(401).send({ error: 'Invalid token' });
    }
  
    const { expired_at, used } = authRecord.rows[0];
  
    if (new Date(expired_at) < new Date() || used) {
      return res.status(401).send({ error: 'Expired or used token' });
    }
  
    const { user_id } = authRecord.rows[0];
    req.user_id = user_id;
  
    await db.query('UPDATE auth SET used = true WHERE token = $1', [token]);
  
    next();
  };
  