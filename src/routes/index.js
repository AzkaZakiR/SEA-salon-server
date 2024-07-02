const router = require("express").Router();

const Services = require('./serviceRoute');
const Branches = require('./branchRoute')
const Auth = require('./authRoute')
const Booking = require('./bookingRoute')
const Review = require('./reviewRoute')
router.use('/api/v1/services', Services)
router.use('/api/v1/branches', Branches)
router.use('/api/v1/auth', Auth)
router.use('/api/v1/booking', Booking)
router.use('/api/v1/review', Review)
module.exports = router;