const router = require('express').Router();

// auth login
router.get('/auth/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/auth/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/auth/google', (req, res) => {
    // handle with passport
    res.send('logging in with Google');
});

module.exports = router;