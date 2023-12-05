import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing = () => {


    return (
        <div className={styles.landingContainer}>

            <img className={styles.backgroundImage} src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/110156951_1949793328653493_8235139042571623013_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeEk2hRSrfyOSrc2GEipUq7UHbSA_azyTdgdtID9rPJN2Byi4rZVVAtEnoAyvGXXWgc&_nc_ohc=YPR-HmKhjAkAX_LApta&_nc_ht=scontent.faep14-2.fna&oh=00_AfCuSwAnAUdh8rBPBb45JVX_vfW6SVyWPlOw0MRriIMlcg&oe=65954BFE" alt="" />


            <div className={styles.centeredContent}>
                <Link to="/home">HOME</Link>
            </div>
        </div>
    );
};

export default Landing;