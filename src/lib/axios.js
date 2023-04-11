import axios from "axios"

const http = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        'X-RapidAPI-Key': import.meta.env.REACT_APP_API_KEY,
        // 'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
})

export default http