const router = require('express').Router();

// import controllers
const controllers_views = require('../controllers/views.controllers');

router.get('/', controllers_views.GET_Inicio);
router.get('/productos', controllers_views.GET_Productos);
router.get('/planes', controllers_views.GET_Planes);
router.get('/asesoria-en-linea', controllers_views.GET_Agenda_asesoria_en_linea);
router.get('/blog', controllers_views.GET_Blog);
router.get('/contacto', controllers_views.GET_Contacto);

module.exports = router;