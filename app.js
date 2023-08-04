/* importar los paquetes como el express
para crear un webserver en un entorno local
*/
const express = require('express');
// el webserver se le asigne al archivo app.js
const app = express();
const port = 9595;

// mostrar contenido de la carpeta public
app.use(express.static('public'));




