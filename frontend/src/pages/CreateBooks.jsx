import React, { useState } from 'react';
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        alert('Error in creating book');
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className='relative min-h-screen flex items-center justify-center'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <Spinner />
        </div>
      )}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 bg-white shadow-lg'>
        <BackButton />
        <h1 className='text-3xl my-auto text-center'>Create Book</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input 
              type='text' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className='border-2 border-gray-500 px-4 py-2 w-full' 
            />
          </div>
          <div>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input 
              type='text' 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              className='border-2 border-gray-500 px-4 py-2 w-full' 
            />
          </div>
          <div>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input 
              type='number' 
              value={publishYear} 
              onChange={(e) => setPublishYear(e.target.value)} 
              className='border-2 border-gray-500 px-4 py-2 w-full' 
            />
          </div>
          <button 
            type='submit' 
            className='p-2 bg-sky-300 mt-8 rounded hover:bg-sky-400 transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBooks;
