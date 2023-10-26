const express = require('express');
const passport = require('../../cauth');

const router = express.Router();

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard', 
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
