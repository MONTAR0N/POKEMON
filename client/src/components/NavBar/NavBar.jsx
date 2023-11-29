import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={styles.navContainer}>
            <Link to='/home'>HOME</Link>
            <Link to='/create'>CREATE</Link>

        </div>
    )
};

export default NavBar;