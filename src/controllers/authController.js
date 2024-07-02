const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Service, Branch } = require('../../models');
const ApiError = require("../utils/apiError");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res, next) => {
    try {
        let { full_name, email, password, date_of_birth, phone_number } = req.body;
        email = email.toLowerCase();

        const user = await User.findOne({
            where: {
                email,
            },
        });

        const roles = 'user'
        if (user) {
            return next(new ApiError("Email sudah terdaftar", 400));
        }

        const passwordLength = password.length < 8;
        if (passwordLength) {
            return next(new ApiError("Password minimal 8 karakter", 400));
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        let dob = date_of_birth || new Date();
        const newUser = await User.create({
            full_name,
            email,
            password: hashedPassword,
            role: roles,
            phone_number: phone_number,
        });

        res.status(201).json({
            is_success: true,
            code: 201,
            data: newUser,
            message: "Register Berhasil!",
        });
    } catch (err) {
        next(new ApiError(err.message, 500));
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return next(new ApiError("Alamat Email tidak ditemukan", 400));
        }
        if (user && bcrypt.compareSync(password, user.password)) {
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    email: user.email,
                    isVerified: user.is_verified,
                    type: "access",
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRED,
                }
            );
            const refreshToken = jwt.sign(
                {
                    id: user.user_id,
                    name: user.name,
                    role: user.role,
                    email: user.email,
                    type: "refresh",
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
                }
            );

            res.status(200).json({
                is_success: true,
                code: 200,
                message: "Login Berhasil!",
                data: {
                    token: accessToken,
                    refreshToken: refreshToken,
                },
            });
        } else {
            next(new ApiError("Password yang dimasukkan salah", 401));
        }
    } catch (err) {
        next(new ApiError(err.message, 500));
    }
};
module.exports = { register, login }