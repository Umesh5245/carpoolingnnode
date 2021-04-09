const express =require('express')
const AuthUserController = require('../controllers/AuthUserController')
const router =express.Router()

router.get('/',AuthUserController.index)
router.post('/loginPost',AuthUserController.loginPost)
router.post('/signupPost',AuthUserController.signupPost)
router.get('/confirmationPost',AuthUserController.confirmationPost)


module.exports =router