const loginCheck = (username, password) => {
  if (username === 'hyde' && password === '123') {
    return true
  }
  return false
}

module.exports = loginCheck