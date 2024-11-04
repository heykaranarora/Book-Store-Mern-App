import React from 'react'
import { Link } from 'react-router-dom';
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {MdOutlineDelete} from 'react-icons/md';
import BookSingleCart from './BookSingleCart';
const BookCard = ({books}) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {books.map((item)=>(
            <BookSingleCart key={item._id} book={item}/>
        ))}
      </div>
    </div>
  )
}

export default BookCard
