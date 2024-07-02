const router = require('express').Router();

// const Services = require('../controllers/servicesController');
const Branch = require('../controllers/branchController')
router.get('/', Branch.getAllBranch)

module.exports = router