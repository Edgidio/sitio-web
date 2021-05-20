const controllers = {};

controllers.GET_Inicio = ((req, res) => {
    res.render('views-routes/incio.view.ejs')
});

controllers.GET_Productos = ((req, res) => {
    res.render('views-routes/productos.view.ejs')
});

controllers.GET_Planes = ((req, res) => {
    res.render('views-routes/planes.view.ejs')
});

controllers.GET_Agenda_asesoria_en_linea = ((req, res) => {
    res.render('views-routes/asesoria-en-linea.view.ejs')
});

controllers.GET_Blog = ((req, res) => {
    res.render('views-routes/blog.view.ejs')
});

controllers.GET_Contacto = ((req, res) => {
    res.render('views-routes/contacto.view.ejs')
});

module.exports = controllers;