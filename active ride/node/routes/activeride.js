const express =require('express')
const ActiverideController = require('../controllers/ActiverideController')
const router =express.Router()

router.get('/',ActiverideController.index)
router.get('/show',ActiverideController.show)
router.post('/store', ActiverideController.store)
router.post('/update',ActiverideController.update)
router.post('/delete',ActiverideController.destroy)



module.exports =router