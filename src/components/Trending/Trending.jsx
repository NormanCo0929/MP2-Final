import { useEffect, useState } from "react"
import axios from "axios"
import SingleContent from "../../components/SingleContent/SingleContent"
import CustomPagination from "../Pagination/CustomPagination"
import "./Trending.css"

const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])

    const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=fd1210df2a8d5a285861160abceb6cbd&page=${page}`
    )
    console.log(data.results)
    setContent(data.result)
  }

  useEffect(() => {
    window.scroll(0, 0)
    fetchTrending()
  }, [page])
    
    return (
        <div className="trend">
            <span  className="pageTitle">Trending</span>
            <div className="trending">
                {content && content.map((c) => (<SingleContent 
                key={c.id} 
                id={c.id} 
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
                />))}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending