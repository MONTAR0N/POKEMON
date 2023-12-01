import {Link} from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <Link to='/home'>HOME</Link>
        </div>
    )
}

export default Landing;