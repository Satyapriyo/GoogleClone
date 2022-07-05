import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Search from './Search'
import Results from './Results'
const Routs = () => {
  return (
    <Routes>
      <Route element={<Navbar/>}></Route>
      <Route element={<Search/>}></Route>
      <Route element={<Results/>}></Route>
    </Routes>
  );
}

export default Routs