import React from "react"
import Header from "../components/Header/Header"
import Movie from "../components/Movie/Movie"
import Navbar from "../components/Navbar/Navbar"

const Movies = () => {
    return (
        <>
        <div>
            <Header/>
            <Movie />
            <Navbar />
        </div>
        </>
    )
}

export default Movies