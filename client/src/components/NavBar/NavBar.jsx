import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return(
        <div>
            <Link to='/home'>HOME</Link>
            <br />
            <Link to='/create'>CREATE</Link>

        </div>
    )
};

export default NavBar;