const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/userModel'); // Debes tener un modelo de usuario

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findByUsername(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado' });
      }
      if (!user.validatePassword(password)) {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
