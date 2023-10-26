const express = require('express');
const bodyParser = require('body-parser');
const actorRoutes = require('./app/routes/actorRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/actors', actorRoutes);

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
