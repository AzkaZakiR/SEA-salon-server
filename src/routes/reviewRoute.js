const router = require('express').Router();
const Booking = require('../controllers/bookingController');
const authenticate = require('../utils/authenticate');
const Review = require('../controllers/reviewController')

router.post('/create', Review.createReview)
router.get('/', Review.getAllReview)

module.exports = router