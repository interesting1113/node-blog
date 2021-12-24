const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: 'titleA',
      content: 'contentA',
      createTime: 1640347831602,
      author: 'hyde'
    },
    {
      id: 2,
      title: 'titleB',
      content: 'contentB',
      createTime: 1640347880124,
      author: 'hydeee'
    }
  ]
}

module.exports = {
  getList
}