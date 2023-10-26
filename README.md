# Documentación del Backend para la Tabla Actor

Este proyecto implementa un backend utilizando Express.js y MySQL para realizar operaciones CRUD en la tabla "actor". A continuación, se describen las rutas y operaciones disponibles.

## Rutas

### Obtener todos los actores

- **URL**: /actors
- **Método**: GET
- **Descripción**: Obtiene una lista de todos los actores en la base de datos.
- **Respuesta exitosa (200 OK)**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    [
      {
        "actor_id": 1,
        "first_name": "Juan,
        "last_name": "Perez"
      },
      {
        "actor_id": 2,
        "first_name": "Ana",
        "last_name": "Torrez"
      }
    ]
    ```

### Obtener actor por ID

- **URL**: /actors/:id
- **Método**: GET
- **Descripción**: Obtiene un actor por su ID.
- **Parámetros de ruta**:
  - `id` (número entero) - ID del actor que se desea obtener.
- **Respuesta exitosa (200 OK)**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "actor_id": 1,
      "first_name": "Juan",
      "last_name": "Perez"
    }
    ```

### Crear actor nuevo

- **URL**: /actors
- **Método**: POST
- **Descripción**: Crea un nuevo actor en la base de datos.
- **Cuerpo de la solicitud**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "first_name": "Maria",
      "last_name": "Castillo"
    }
    ```
- **Respuesta exitosa (201 Created)**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "message": "Actor creado exitosamente",
      "actor_id": 3
    }
    ```

### Actualizar actor por ID

- **URL**: /actors/:id
- **Método**: PUT
- **Descripción**: Actualiza un actor existente por su ID.
- **Parámetros de ruta**:
  - `id` (número entero) - ID del actor que se desea actualizar.
- **Cuerpo de la solicitud**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "first_name": "Angel",
      "last_name": "Alvarez"
    }
    ```
- **Respuesta exitosa (200 OK)**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "message": "Actor actualizado exitosamente",
      "actor_id": 1
    }
    ```

### Eliminar actor por ID

- **URL**: /actors/:id
- **Método**: DELETE
- **Descripción**: Elimina un actor por su ID.
- **Parámetros de ruta**:
  - `id` (número entero) - ID del actor que se desea eliminar.
- **Respuesta exitosa (200 OK)**:
  - Tipo: JSON
  - Ejemplo:
    ```json
    {
      "message": "Actor eliminado exitosamente",
      "actor_id": 2
    }
    ```

## Seguridad

Este proyecto implementa una autenticación básica mediante Passport.js para proteger las rutas. Asegúrate de configurar adecuadamente las medidas de seguridad adicionales según tus necesidades.

## Instrucciones para Ejecutar el Proyecto

Siga estos pasos para ejecutar el proyecto en su entorno local:

1. **Requisitos Previos**:
   - Asegúrese de tener [Node.js] instalado.

2. **Creación de una Base de Datos**:

Para configurar la base de datos necesaria para este proyecto, siga estos pasos:

  - Crear la Base de Datos:
     - Abra su cliente MySQL o herramienta de administración de bases de datos.
     - Ejecute el siguiente comando SQL para crear la base de datos "actors":
       ```sql
       CREATE DATABASE IF NOT EXISTS actors;
       ```
       
  - Crear la Tabla "actor":
       - Use la base de datos recién creada con el siguiente comando:
         ```sql
         USE actors;
         ```
  - A continuación, ejecute el siguiente comando para crear la tabla "actor" con campos como "actor_id", "first_name", "last_name", etc.:
     ```sql
     CREATE TABLE IF NOT EXISTS actor (
       actor_id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(255) NOT NULL,
       last_name VARCHAR(255) NOT NULL
     );
     ```
  -Inserción de Datos de Prueba (Opcional)**:
   - Si lo desea, puede agregar datos de prueba a la tabla "actor" utilizando comandos INSERT INTO.


3. **Instalación de Dependencias**:
   - Abra una terminal en la raíz del proyecto y ejecute el siguiente comando para instalar las dependencias:
     ```sh
     npm install
     ```
4. **Configuración de la Base de Datos**:
   - En el archivo `config/db.js`, ajuste la configuración de la base de datos con los detalles de su servidor MySQL.

5. **Ejecución del Servidor**:
   - Ejecute el servidor utilizando el siguiente comando:
     ```sh
     npm start
     ```
   - El servidor se ejecutará en el puerto predeterminado 3000. Puede acceder a las rutas API en `http://localhost:3000/actors`.
