const router = require('express').Router();
const Booking = require('../controllers/bookingController');
const authenticate = require('../utils/authenticate');
router.post('/create', authenticate, Booking.createBooking)
router.get('/', authenticate, Booking.getUserBooking)

module.exports = router