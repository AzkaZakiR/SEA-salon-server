const router = require('express').Router();

const Services = require('../controllers/servicesController');
router.get('/', Services.getAllServices)

module.exports = router