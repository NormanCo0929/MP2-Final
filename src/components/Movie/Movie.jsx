import { useEffect, useState } from "react"
import axios from "axios"
import SingleContent from "../../components/SingleContent/SingleContent"
import CustomPagination from "../Pagination/CustomPagination"
import Genres from "../Genres/Genres"
import "./Movie.css"

const Movie = () => {

    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    

    const fetchMovies = async () => {
    const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=fd1210df2a8d5a285861160abceb6cbd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
        )
        console.log(data.results)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        fetchMovies()
    }, [page])

    return (
        <div className="movie-page">
            <span className="page-title">Movies</span>
            <Genres
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="trending">
                {content && content.map((c) => (
                <SingleContent 
                key={c.id} 
                id={c.id} 
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
                />))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movie