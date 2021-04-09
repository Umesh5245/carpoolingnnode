const express =require('express')
const UserController = require('../controllers/UserController')
const router =express.Router()

router.get('/',UserController.index)
router.post('/show',UserController.show)
router.post('/store', UserController.store)
router.post('/update',UserController.update)
router.post('/delete',UserController.destroy)
router.post('/userhomeupdate',UserController.userhomeupdate)
router.post('/userhomeshow',UserController.userhomeshow)



module.exports =router