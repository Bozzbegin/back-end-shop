const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../Middleware/authMiddleware');

router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'This is a ecure route', user: req.uer });
});

module.exports = router;