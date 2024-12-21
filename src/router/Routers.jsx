import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Gallery from '../pages/Gallery'
import About from '../pages/About'


const Routers = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default Routers
