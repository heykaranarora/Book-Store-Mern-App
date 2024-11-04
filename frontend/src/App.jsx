import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import Spinner from './component/Spinner'
const App = () => {
  return (
    <>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/book/create' element={<CreateBooks/>}/>
  <Route path='/book/details/:id' element={<ShowBook/>}/>
  <Route path='/book/edit/:id' element={<EditBook/>}/>
  <Route path='/book/delete/:id' element={<DeleteBook/>}/> 
</Routes>

    </>
  )
}

export default App
