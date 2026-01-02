import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Error404 from '../Pages/Error404'
import Footer from '../Layouts/Footer'
import HeaderTwo from '../Layouts/HeaderTwo'
import AddProduct from '../Pages/AddProduct'
import Details from '../Pages/Details'
import Edit from '../Pages/Edit'

const Routing = () => {
  return (
    <div>
      <HeaderTwo/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/create' element={<AddProduct/>}/>
        <Route path='/details/:id' element={<Details/>}/>
         <Route path='/update/:id' element={<Edit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Routing
