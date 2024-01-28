// routes/auth.js
const express = require('express');
const User = require('../userModels/user');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, name, email, password } = req.body;

        // Check if username or email already exists
        if (User.findByUsernameOrEmail(username) || User.findByUsernameOrEmail(email)) {
            return res.status(409).json({ error: 'Username or email already exists' });
        }

        // Create a new user
        await User.createUser(username, name, email, password);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { usernameOrEmail, password } = req.body;

        // Find user by username or email
        const user = User.findByUsernameOrEmail(usernameOrEmail);

        // Check if user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if password matches
        const passwordMatch = await user.checkPassword(password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Passwords match, user is authenticated
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
