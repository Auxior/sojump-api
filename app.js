// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // errno 默认值为 1，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, errno = 1) {
    res.send({
      errno,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入并使用路由模块
const answerRouter = require('./router/answer')
const questionRouter = require('./router/question')
const statRouter = require('./router/stat')
const userRouter = require('./router/user')
app.use('/api/answer', answerRouter)
app.use('/api/question', questionRouter)
app.use('/api/stat', statRouter)
app.use('/api/user', userRouter)

// 启动服务器
app.listen(3000, () => {
  console.log('api server running at http://127.0.0.1:3000')
})
