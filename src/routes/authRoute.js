const router = require('express').Router();

// const Services = require('../controllers/servicesController');
const Branch = require('../controllers/branchController')
const Auth = require('../controllers/authController')
router.post('/register', Auth.register)
router.post('/login', Auth.login)

module.exports = router