import React from 'react'

const Header = (props) => {

  

  

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    window.location.reload() 
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-2xl font-semibold '>Hello  <span className='text-3xl font-semibold'>user!! 😍</span></h1>
        <button onClick={logOutUser} className='bg-green-600 text-lg  font-semibold text-white px-5 py-2 rounded-md hover:bg-red-500'>Logout</button>
    </div>
  )
}

export default Header
