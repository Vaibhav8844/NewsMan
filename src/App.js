import React from 'react'
import NavBar from './Components/NavBar.js'
import News from './Components/News.js'
import History from './Components/History.js'
import { Route,Routes } from 'react-router-dom';
import F404 from './Components/404.js';
import { useState } from 'react';
// import Auth from './Components/Auth.js';

export function App() {
  const [category,setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory}/>
      <Routes>
      <Route path="/" element={<News category={category}/>} />
      {/* <Route path="/" element={<Auth/>} /> */}
      <Route path="/blogs" element={<History />} />
      <Route path="*" element={<F404/>} />
      </Routes>
    </>
  )
}

