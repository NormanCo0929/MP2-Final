import React from "react"
import Header from "../components/Header/Header"
import Explore from "../components/Search/Explore"
import Navbar from "../components/Navbar/Navbar"

const Search = () => {
    return (
        <>
        <div>
            <Header/>
            <Explore />
            <Navbar />
        </div>
        </>
    )
}

export default Search