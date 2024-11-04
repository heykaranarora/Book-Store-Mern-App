import React from 'react'
import { Link } from 'react-router-dom';
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {MdOutlineDelete} from 'react-icons/md';

const BookSingleCart = ({book}) => {
  return (
    <div key={book._id} className='border-2 border-gray-500 rounnded-xl px-4 py-2 m-4 relative hover:shadow:xl'>
                <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg '>{book.publishYear}</h2>

                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-2xl text-blue-500'/>
                    <h2 className='text-xl'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-2xl text-blue-500'/>
                    <h2 className='text-xl'>{book.author}</h2>
                </div>
                <div className='flex justify-between item-center gap-x-2 mt-4 p-2'>
                    <Link to={`/book/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600'/>
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600'/>
                    </Link>
                </div>
            </div>
  )
}

export default BookSingleCart
