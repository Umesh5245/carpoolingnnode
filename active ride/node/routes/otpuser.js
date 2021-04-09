const express =require('express')
const OtpUserController = require('../controllers/OtpUserController')
const router =express.Router()

router.get('/',OtpUserController.index)
router.post('/otpPost',OtpUserController.otpPost)
router.get('/otpconfirm',OtpUserController.otpconfirm)



module.exports =router