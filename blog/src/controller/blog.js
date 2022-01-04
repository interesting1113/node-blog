const { exec} = require('../db/mysql')
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  
  // 返回 promise
  return exec(sql)
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

const delBlog = (id) => {
  // id 就是要删除博客的id

  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog, 
  updateBlog,
  delBlog
}