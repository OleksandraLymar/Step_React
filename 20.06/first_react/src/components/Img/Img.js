import imageR from "../Img/react.png"
import styles from "../Img/Img.css";
import * as React from 'react';

const NineImg = () => {
    return(
        <img className={styles.img}
             alt={"Late hometask"}
             src={imageR}/>
    )
}

export default NineImg