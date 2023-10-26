const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./config/auth');
const actorRoutes = require('./app/routes/actorRoutes');
const authRoutes = require('./app/routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/actors', actorRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
