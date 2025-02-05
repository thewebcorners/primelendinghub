const { default: mongoose } = require('mongoose');
const employeeModel = require('../models/empRegistration');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeController = {
    add: async (req, res) => {
        try {
            const { firstName, lastName, email, mobile, password } = req.body;
            if (!firstName || !lastName || !email || !mobile || !password) {
                res.status(400).json({ message: 'All Fields are Required', error: error.message });
            }
            const userEmp = await employeeModel.findOne({ email })
            if (userEmp) {
                res.status(400).json({ message: 'Already Exist this email', error: true, success: false });
            }
            const salt = bcryptjs.genSaltSync(10)
            const hashpassword = bcryptjs.hashSync(password, salt);
            const payload = { ...req.body, password: hashpassword }
            const newemp = new employeeModel(payload);
            const saveemp = await newemp.save();
            res.status(200).json({
                data: saveemp,
                message: 'Signup Successfully',
                error: false,
                success: true
            })
        } catch (error) {
            res.status(500).json({ message: 'Error in Signup.', error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ message: 'All Fields are Required', error: error.message });
            }
            const userEmp = await employeeModel.findOne({ email })
            if (!userEmp) {
                res.status(400).json({ message: 'Not a Vailid User', error: true, success: false });
            }
            if (userEmp.status == "Inactive") {
                res.status(400).json({ message: 'Contact to Admin', error: true, success: false });
            }
            const checkPassword = await bcryptjs.compare(password, userEmp.password);
            if (checkPassword) {
                const tokenData = {
                    _id: userEmp._id,
                    email: userEmp.email
                };

                // Generate JWT token
                const token = jwt.sign(
                    tokenData,
                    process.env.TOKEN_SECRET_KEY, // Use an environment variable for security
                    { expiresIn: '1h' } // Token expires in 1 hour
                );

                const tokenOptions = {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Only secure in production (HTTPS)
                    sameSite: 'Strict' // Add this for additional CSRF protection
                };

                res.cookie("token", token, tokenOptions).status(200).json({
                    message: "Login successful",
                    token,
                    data:userEmp,
                    success: true,
                    error: false
                });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error in Login.', error: error.message });
        }
    },
    profile: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: 'Error in profile.', error: error.message });
        }
    },
    update: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: 'Error in Update.', error: error.message });
        }
    },
    deleteEmp: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: 'Error in Delete.', error: error.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("token",{path:'/'})
            res.status(200).json({
                message: "Logout successfully",
                success: true,
                error: false,
                data: []
            });
        } catch (error) {
            res.status(500).json({ message: 'Error in Logout.', error: error.message });
        }
    }
    

}

module.exports = employeeController