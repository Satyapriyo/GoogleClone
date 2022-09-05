import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
const Routs = () => {
  return (
    <Routes>
      <Route path="/" >
        <Search/>
        </Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path={["/images" , "/search","/news","/videos"]}>
        <Results/>
      </Route>
      <Route  element={<Results/>}></Route>
    </Routes>
  );
}

export default Routs