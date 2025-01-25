const express = require('express');
const router = express.Router();

const userRegisterController = require('../controller/users.controller');
const loginController = require('../controller/login.controller');
const logoutController = require('../controller/logout.controller');
const authToken = require('../middleware/authToken');
const professionController = require('../controller/profession.controller');
const leadController = require('../controller/addlead.controller');

router.post('/register',userRegisterController);
router.post('/send-otp',loginController.sendOTP);
router.post('/verify-otp',loginController.verifyOTP);
router.get('/logout',authToken,logoutController);

//For Profession
router.post('/addprofession',authToken,professionController.addprofession); //
router.get('/allprofession',authToken,professionController.listprofession); //
router.put('/updateprofession/:id',authToken,professionController.editprofession);
router.delete('/deleteprofession/:id',authToken,professionController.deleteprofession);

//For Profession
router.post('/addlead',leadController.add); //

module.exports = router