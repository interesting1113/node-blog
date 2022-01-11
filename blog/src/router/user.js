const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  path = url.split('?')[0]

  // 登陆
  if (method === 'POST' && req.path  === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 操作 cookie
        res.setHeader('Set-Cookie', `username=${data.username}; path=/`)
        return new SuccessModel()
      }
      return new ErrorModel('登陆失败')
    })
  }

  // 登陆验证的测试
  if (method === 'GET' && req.path === 'api/user/login-test') {
    if (req.cookie.username) {
      return new Promise.resolve(SuccessModel({
        username: req.cookie.username
      }))
    }
    return new ErrorModel('尚未登陆')
  }
} 

module.exports = handleUserRouter