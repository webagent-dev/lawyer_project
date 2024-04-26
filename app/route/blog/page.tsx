import React from 'react'
import Update from  '../../component/Update'
import Overview from '../../component/Overview'

function page() {
  return (
   <div className='blog_container'>
    <Update />
    <Overview />
   </div>
  )
}

export default page