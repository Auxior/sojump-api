const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')

// 获取用户信息
router.get('/info', user_handler.info)
// 注册
router.post('/register', user_handler.register)
// 登录
router.post('/login', user_handler.login)

module.exports = router
