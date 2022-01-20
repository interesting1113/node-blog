const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
var express = require('express')
var router = express.Router()

router.post('/login', function(req, res, next) {
  const { username, password } = req.body
    // const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
      
        res.json( 
          new SuccessModel()
        )
        return
      }
      res.json( 
        new ErrorModel('登陆失败')
      )
    })
});

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      errno: 0,
      msg: '测试成功'
    })
    return
  }
  res.json({
    errno: -1,
    msg: '未登陆'
  })
})

// router.get('/session-test', (req, res, next) => {
//   const session = req.session
//   if (session.viewNum === 0) {
//     session.viewNum = 0
//   }
//   session.viewNum ++

//   res.json({

//   })
// })

module.exports = router