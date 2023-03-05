const express = require("express")
const { body } = require("express-validator")
const router = express.Router()
const { register, login, forgetPassword, resetPassword, getPrivateData, } = require('../controllers/auth/auth')
const { getAccessToRoute } = require("../middlewares/auth/accessRoute")

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 4 }), register)
router.post('/login', body('email').isEmail, body('password').isLength({ min: 4 }), login)
router.post('/forgotpassword', forgetPassword,)
// router.get('/resetpassword/:resetPasswordToken')
router.put('/resetpassword', resetPassword)
router.get('/private', getAccessToRoute, getPrivateData)

module.exports = router
