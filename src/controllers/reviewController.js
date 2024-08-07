const apiError = require("../utils/apiError");
const { Op } = require('sequelize');
const { Service, Branch, Review } = require('../../models');

const getAllReview = async (req, res, next) => {
    try {
        const {
            page,
            limit,
            branch
        } = req.query;

        const pageNum = parseInt(page) || 1;
        const pageSize = parseInt(limit) || 10;
        const offset = (pageNum - 1) * pageSize;

        const whereClause = {};
        const { count, rows: review } = await Review.findAndCountAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: whereClause,
            offset,
            limit: pageSize, // Use pageSize instead of limitData
        });

        if (!review || review.length === 0) {
            return next(new apiError("Data branchs not found", 404));
        }

        const totalPages = Math.ceil(count / pageSize); // Calculate total pages

        res.status(200).json({
            is_success: true,
            code: 200,
            data: {
                review,
                pagination: {
                    totalData: count,
                    totalPages,
                    pageNum,
                    pageSize,
                }
            },
        });
    } catch (error) {
        // Handle errors
        console.error("Error in getAllServices:", error);
        next(error); // Pass error to error handling middleware
    }
}

const createReview = async (req, res, next) => {
    try {
        const { rating, review_text, reviewer } = req.body

        // let reviewData = JSON.stringify(reviewer)
        const review = await Review.create({
            rating: rating,
            review_text: review_text,
            reviewer: reviewer,
        })
        res.status(201).json({
            is_success: true,
            code: 201,
            data: {
                review,
            },
            message: 'Create Review success'
        });
    } catch (error) {
        next(new apiError(error.message, 400));

    }

}
module.exports = {
    getAllReview,
    createReview
}