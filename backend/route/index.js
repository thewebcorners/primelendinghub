const express = require('express');
const router = express.Router();

const userRegisterController = require('../controller/users.controller');
const loginController = require('../controller/login.controller');
const logoutController = require('../controller/logout.controller');
const authToken = require('../middleware/authToken');
const professionController = require('../controller/profession.controller');
const leadController = require('../controller/addlead.controller');
const userDetailsController = require('../controller/userdetails.controller');
const userUpdateDetailsController = require('../controller/userUpdateDetails.controller');
const userDeleteController = require('../controller/userDelete.controller');
const employeeController = require('../controller/employee.controller');

router.post('/register',userRegisterController);
router.post('/send-otp',loginController.sendOTP);
router.post('/verify-otp',loginController.verifyOTP);
router.get('/logout',authToken,logoutController);
router.get('/userdetails/:id',authToken,userDetailsController);
router.put('/user-update/:id',authToken,userUpdateDetailsController);
router.delete('/user-delete/:id',authToken,userDeleteController);
//For Profession
router.post('/addprofession',authToken,professionController.addprofession); //
router.get('/allprofession',professionController.listprofession); //
router.put('/updateprofession/:id',authToken,professionController.editprofession);
router.delete('/deleteprofession/:id',authToken,professionController.deleteprofession);

//For Lead
router.post('/addlead',leadController.add); //



//For Dashboard
router.post('/signup',employeeController.add);
router.post('/login',employeeController.login);
router.get('/user-details',employeeController.profile);
router.get('/userLogout',employeeController.logout);


module.exports = router