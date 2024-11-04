import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../component/Spinner';
import BooksTable from '../component/Home/BooksTable';
import BookCard from '../component/Home/BookCard';
const Home = () => {
  const[showType,setShowType]=useState('table');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
    <div className="flex justify-center items-center gap-x-4">
      <button className='bg-sky-400 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('table')}>
      Table
      </button>
      <button className='bg-sky-400 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('card')}>
      Card
      </button>
    </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/book/create'>
          <MdOutlineAddBox className='text-4xl text-blue-500' />
        </Link>
      </div>
      {loading ? <Spinner/>:showType==='table'? (<BooksTable books={books}/>):(<BookCard books={books}/>)}
    </div>
  );
};

export default Home;
