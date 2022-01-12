const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取 cookie 的过期时间
const ookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}

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
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
        return new SuccessModel()
      }
      return new ErrorModel('登陆失败')
    })
  }

  // 登陆验证的测试
  if (method === 'GET' && req.path === 'api/user/login-test') {
    if (req.session.username) {
      return new Promise.resolve(SuccessModel({
        username: req.session.username
      }))
    }
    return new ErrorModel('尚未登陆')
  }
} 

module.exports = handleUserRouter