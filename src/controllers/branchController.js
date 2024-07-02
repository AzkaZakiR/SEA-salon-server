const apiError = require("../utils/apiError");
const { Op } = require('sequelize');
const { Service, Branch } = require('../../models');

const getAllBranch = async (req, res, next) => {
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
        if (branch) whereClause.branch_id = branch;
        console.log(branch)
        const { count, rows: branches } = await Branch.findAndCountAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: whereClause,
            offset,
            limit: pageSize, // Use pageSize instead of limitData
        });

        if (!branches || branches.length === 0) {
            return next(new apiError("Data branchs not found", 404));
        }

        const totalPages = Math.ceil(count / pageSize); // Calculate total pages

        res.status(200).json({
            is_success: true,
            code: 200,
            data: {
                branches,
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

module.exports = {
    getAllBranch
}