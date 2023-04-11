import "./Header.css"

const Header = () => {
    return (
        <div className="header" onClick={() => window.scroll(0,0)}>
            <span>Movie Web App</span>
        </div>

    )
}

export default Header