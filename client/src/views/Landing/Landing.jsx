import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing = () => {


    return (
        <div className={styles.landingContainer}>

            <img className={styles.backgroundImage} src="https://wallpapercave.com/wp/wp1989447.jpg" alt="" />


            <div className={styles.centeredContent}>
                <Link to="/home">HOME</Link>
            </div>
        </div>
    );
};

export default Landing;