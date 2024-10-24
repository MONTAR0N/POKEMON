import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing = () => {


    return (
        <div className={styles.landingContainer}>

            <img className={styles.backgroundImage} src="https://wallpapers.com/images/hd/ghost-pokemon-1529-x-765-oxqljm57gvltu7p2.jpg" alt="Ghost Pokemon Landscape" />


            <div className={styles.centeredContent}>
                <Link to="/home">HOME</Link>
            </div>
        </div>
    );
};

export default Landing;