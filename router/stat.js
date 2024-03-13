const express = require('express')
const router = express.Router()

const stat_handler = require('../router_handler/stat')

// 答卷列表
router.get('/:questionId', stat_handler.getStatList)
// 获取单个组件的统计数据汇总
router.get('/:questionId/:componentId', stat_handler.getStat)

module.exports = router
