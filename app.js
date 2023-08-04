/* importar los paquetes como el express
para crear un webserver en un entorno local
*/
const express = require('express');
// el webserver se le asigne al archivo app.js
const app = express();
const port = 9595;

// mostrar contenido de la carpeta public
app.use(express.static('public'));

// consultar las páginas en el webserver se utiliza el get, una función de flecha

app.get('/left-sidebar', (req, res) => {
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/left-sidebar.html' );

})
app.get('/right-sidebar', (req, res) => {
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/right-sidebar.html' );

})







