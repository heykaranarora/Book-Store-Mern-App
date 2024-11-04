import React, { useState } from 'react';
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <Spinner />
        </div>
      )}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-md p-4 bg-white'>
        <BackButton />
        <h1 className='text-3xl my-4 text-center'>Delete Book</h1>
        <div className='my-4'>
          <button onClick={handleDeleteBook} className='w-full px-4 py-2 bg-red-500 text-white rounded-md'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
