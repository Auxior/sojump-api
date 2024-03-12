const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')

// 答卷列表
router.get('/:questionId', user_handler.getStatList)
// 获取单个组件的统计数据汇总
router.get('/:questionId/:componentId', user_handler.getStat)

module.exports = router
