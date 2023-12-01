import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <Link to='/home'>HOME</Link>
            <Link to='/create'>CREATE</Link>
            <SearchBar />
        </div>
    )
};

export default NavBar;