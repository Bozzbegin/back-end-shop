const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        if(!username || !password || !email) { 
        console.log(error);
        }
        else {
            const { username, password, email } = req.body;
        
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const user = new User ({
                username,
                password: hashedPassword,
                email          
            });
            await user.save();
            res.json({ message: 'Registration successfully' });
        }
        
    }
    catch (error) {
        console.log('Registration failed: ', error);
       
        if (error.code === 11000 && error.keyValue && error.keyValue.username !== null) {
            return res.status(400).json({ error: 'Username is already taken' });
        } else {
            return res.status(500).json({ error: 'Registration failed' });
        }

    }
});

module.exports = router;