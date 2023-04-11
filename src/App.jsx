import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom"
import Home from "./routes/Home"
import Movies from "./routes/Movies"
import TvSeries from "./routes/TvSeries"
import Search from "./routes/Search"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/TvSeries" element={<TvSeries/>}/>
          <Route path="/Search" element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App
