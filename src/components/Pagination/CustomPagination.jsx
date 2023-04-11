import "./CustomPagination.css"
import Pagination from '@mui/material/Pagination'


const CustomPagination = ({ setPage, numOfPages = 20 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div className='custom-pagination'>
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            color="primary"
            hideNextButton
            hidePrevButton />
        </div>
    )
}

export default CustomPagination