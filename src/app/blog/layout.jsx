import React from 'react'

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>Hi, This is blog page</h1>
      {children}
    </div>
  )
}

export default BlogLayout