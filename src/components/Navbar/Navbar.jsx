import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { BsFire } from "react-icons/bs"
import { MdMovieFilter } from "react-icons/md"
import { BiMoviePlay } from "react-icons/bi"
import { FaSearch } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="nav-menu">
            <li>
                <div className="nav-icons">
                {<BsFire/>}
                </div>
                <Link to="/">Trending</Link>
            </li>
            <li>
                <div className="nav-icons">
                {<MdMovieFilter/>}
                </div>
                <Link to="/Movies">Movies</Link>
            </li>
            <li>
                <div className="nav-icons">
                {<BiMoviePlay/>}
                </div>
                <Link to="/TvSeries">TV Series</Link>
            </li>
            <li>
                <div className="nav-icons">
                {<FaSearch/>}
                </div>
                <Link to="/Search">Search</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar