const mysql = require('mysql');

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Método para encontrar un usuario por nombre de usuario
  static findByUsername(username, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        if (results.length === 0) {
          callback(null, null); // Usuario no encontrado
        } else {
          const user = new User(results[0].username, results[0].password);
          callback(null, user);
        }
      }
    });
  }

  // Método para validar la contraseña
  validatePassword(password) {
    return this.password === password;
  }

  // Método para encontrar un usuario por ID (si es necesario)
  static findById(id, callback) {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        if (results.length === 0) {
          callback(null, null); // Usuario no encontrado
        } else {
          const user = new User(results[0].username, results[0].password);
          callback(null, user);
        }
      }
    });
  }
}

module.exports = User;
