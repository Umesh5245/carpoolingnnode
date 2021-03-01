const express =require('express')
const ChatController = require('../controllers/ChatController')
const router =express.Router()

router.get('/',ChatController.index)
router.get('/show',ChatController.show)
router.post('/store', ChatController.store)
router.post('/update',ChatController.update)
router.post('/delete',ChatController.destroy)

module.exports =router