const express =require('express')
const RideController = require('../controllers/RideController')
const router =express.Router()

router.get('/',RideController.index)
router.get('/show',RideController.show)
router.post('/store', RideController.store)
router.post('/update',RideController.update)
router.post('/delete',RideController.destroy)

module.exports =router