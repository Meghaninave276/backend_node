import React from 'react'
import Home from './Home/Home'
import "./App.css";
import Hero from './Hero/Hero';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     
    </div>
  )
}


