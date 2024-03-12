const express = require('express')
const router = express.Router()

const answer_handler = require('../router_handler/answer')

// 收集（新建）答卷
router.post('/', answer_handler.answer)

module.exports = router
