import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
const BackButton = ({destination='/'}) => {
  return (
    <div>
      <div className='flex'>
    <Link to={destination}
    className='bg-sky-400 text-white px-4 py-3 rounded-lg'>
    <BsArrowLeft className='text-2xl'/>
    </Link>
    </div>
    </div>
  )
}

export default BackButton
