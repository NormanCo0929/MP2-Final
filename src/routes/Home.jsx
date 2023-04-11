import React from "react"
import Header from "../components/Header/Header"
import Trending from "../components/Trending/Trending"
import Navbar from "../components/Navbar/Navbar"

const Home = () => {
    return (
        <>
        <div>
            <Header/>
            <Trending/>
            <Navbar />
        </div>
        </>
    )
}

export default Home