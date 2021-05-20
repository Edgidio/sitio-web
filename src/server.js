const express = require('express');
const app = express();

// import molules node
const path = require('path');

// settings
app.set('PORT', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require('./routes/views.routes')); // VISTAS DE LA PAGINA

module.exports = app;