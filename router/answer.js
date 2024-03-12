const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')

// 收集（新建）答卷
router.post('/', user_handler.submitAnswer)

module.exports = router
