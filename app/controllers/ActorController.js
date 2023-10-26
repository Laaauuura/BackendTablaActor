const Actor = require('../models/actorModel');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'tu-host-de-base-de-datos',
  user: 'tu-usuario-de-base-de-datos',
  password: 'tu-contraseña-de-base-de-datos',
  database: 'actors',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Obtener todos los actores
const getAllActors = (req, res) => {
  const query = 'SELECT * FROM actor';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los actores' });
    } else {
      res.json(results);
    }
  });
};

// Obtener un actor por ID
const getActorById = (req, res) => {
  const actorId = req.params.id;
  const query = 'SELECT * FROM actor WHERE actor_id = ?';
  db.query(query, [actorId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el actor' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Actor no encontrado' });
    } else {
      res.json(results[0]);
    }
  });
};

// Crear un nuevo actor
const createActor = (req, res) => {
  const { first_name, last_name } = req.body;
  if (!first_name || !last_name) {
    res.status(400).json({ error: 'Se requieren first_name y last_name' });
  } else {
    const query = 'INSERT INTO actor (first_name, last_name) VALUES (?, ?)';
    db.query(query, [first_name, last_name], (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error al crear el actor' });
      } else {
        res.json({ message: 'Actor creado exitosamente', actor_id: results.insertId });
      }
    });
  }
};

// Actualizar un actor por ID
const updateActor = (req, res) => {
  const actorId = req.params.id;
  const { first_name, last_name } = req.body;
  if (!first_name || !last_name) {
    res.status(400).json({ error: 'Se requieren first_name y last_name' });
  } else {
    const query = 'UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?';
    db.query(query, [first_name, last_name, actorId], (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error al actualizar el actor' });
      } else {
        res.json({ message: 'Actor actualizado exitosamente', actor_id: actorId });
      }
    });
  }
};

// Eliminar un actor por ID
const deleteActor = (req, res) => {
  const actorId = req.params.id;
  const query = 'DELETE FROM actor WHERE actor_id = ?';
  db.query(query, [actorId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el actor' });
    } else {
      res.json({ message: 'Actor eliminado exitosamente', actor_id: actorId });
    }
  });
};

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
};
