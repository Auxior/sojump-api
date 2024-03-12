const express = require('express')
const router = express.Router()

const question_handler = require('../router_handler/question')

// 获取单个问卷信息
router.get('/:id', question_handler.getQuestion)
// 创建问卷
router.post('/', question_handler.createQuestion)
// 获取（查询）问卷列表
router.get('/', question_handler.getQuestionList)
// 更新问卷
router.patch('/:id', question_handler.updateQuestion)
// 复制问卷
router.post('/duplicate/:id', question_handler.duplicateQuestion)
// 批量彻底删除
router.delete('/', question_handler.deleteQuestion)

module.exports = router
