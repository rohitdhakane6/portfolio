// routes/adminRoutes.js
const router = require('express').Router();
import { User } from '../models';
const jwt = require('jsonwebtoken');

// Admin login
router.post('/admin-login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user && user.role === 'admin') {
      const token = jwt.sign({ username: user.username, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).send({
        data: { user, token },
        success: true,
        message: 'Login successfully',
      });
    } else {
      res.status(401).send({
        success: false,
        message: 'Invalid username or password',
      });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;
