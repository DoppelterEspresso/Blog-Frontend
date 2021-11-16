import { useEffect } from "react";
import { Link } from "react-router-dom"

const Header = () => {

    useEffect(() => {
        let header = document.getElementsByTagName("header")[0]
        let sticky = header.offsetTop;
        function headerCheck() {
            if (window.scrollY > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
        window.onscroll = function() {headerCheck()}
    })

    return (
        <header>
            <h1 className="logo">My Blog</h1>
            <div>
                <Link to="/" className="header-links">Home</Link>
                <Link to="/about" className="header-links">About</Link>
            </div>
        </header>
    )
}

export default Header;