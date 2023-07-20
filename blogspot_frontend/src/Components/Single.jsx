import React from 'react'
import SinglePost from './SinglePost'
import Sidebar from './Sidebar'
const Single = () => {
  return (
    <div style={{display:"flex"}}>
        <SinglePost/>
        <Sidebar/>    
    </div>
  )
}

export default Single
