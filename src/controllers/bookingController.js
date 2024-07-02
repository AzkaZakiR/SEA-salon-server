const apiError = require("../utils/apiError");
const { Op } = require('sequelize');
const { Service, Branch, Booking } = require('../../models');
const booking = require("../../models/booking");

const createBooking = async (req, res, next) => {
    const {
        name,
        phone_number,
        services_id,
    } = req.body;
    // const userId = 13
    const { id } = req.user
    const now = new Date();
    const booking_date = now.toISOString();

    const service = await Service.findByPk(services_id);
    if (!service) {
        return next(new apiError("Service not found", 404));
    }

    try {
        const newBooking = await Booking.create({
            services_id: services_id,
            user_id: id,
            booking_date: booking_date,
            status: 'booked'
        });


        res.status(201).json({
            is_success: true,
            code: 200,
            data: {
                newBooking,
            },
            message: 'Booking created successfully'
        });
    } catch (error) {
        next(new apiError(error.message, 500));
    }
};

const getUserBooking = async (req, res, next) => {
    try {
        const { id } = req.user

        const booking = await Booking.findAll({ where: { user_id: id } })

        res.status(200).json({
            is_success: true,
            code: 200,
            data: booking,
            message: 'Booking Get successfully'
        });

    } catch (error) {
        next(new apiError(error.message, 500));

    }
}

module.exports = {
    createBooking,
    getUserBooking
}