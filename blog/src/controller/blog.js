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

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: 'titleA',
    content: 'contentA',
    createTime: 1640347831602,
    author: 'hyde'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象， 包含title content属性
  console.log('newBlog...', blogData)

  return {
    id: 3 // 表示新建博客， 插入到数据表里面 id
  }

}

const updateBlog = (id, blogData) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog, 
  updateBlog
}