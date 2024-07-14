import React from 'react';
import styles from './index.module.css'

const MagicScrollButton = () => {
    return (
        <div className={styles.mouse}>
            <div className={styles.innerDot}></div>
            <div className={`${styles.bottomArrowOne} ${styles.bottomArrow}`}></div>
            <div className={`${styles.bottomArrowTwo} ${styles.bottomArrow}`}></div>
            <div className={`${styles.bottomArrowThree} ${styles.bottomArrow}`}></div>
        </div>
    );
}

export default MagicScrollButton;
