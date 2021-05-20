const app = require('./server');

// start server
app.listen(app.get('PORT'), () => {
    console.log('Servidor corriendo en el puerto', app.get('PORT'));
});