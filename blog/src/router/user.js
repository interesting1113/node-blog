const handleUserRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  path = url.split('?')[0]

  // 登陆
  if (method === 'POST' && req.path  === '/api/user/login') {
    return {
      msg: '这是登陆的接口'
    }
  }
} 

module.exports = handleUserRouter