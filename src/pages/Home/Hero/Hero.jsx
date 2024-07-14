import React from 'react';
import styles from "./hero.module.css";
import MagicScrollButton from '../../../components/MagicScrollButton/MagicScrollButton';
import herobg from "../../../assets/images/home/herobg.png";
import diamond from "../../../assets/images/home/hero/diamond.png";
import bell from "../../../assets/images/home/hero/bell.png";
import seven from "../../../assets/images/home/hero/seven.png";
import dice from "../../../assets/images/home/hero/dice.png";

const Hero = () => {
    const bgStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
    }

    return (
        <div className={`inner-container d-flex justify-content-center flex-column position-relative ${styles.herobg}`}>
            <img data-aos="fade-up" data-aos-offset="-200" className={`img-fluid ${styles.building}`} src={herobg} alt="" />
            <img className={`img-fluid ${styles.diamond} ${styles.floatingIcon}`} src={diamond} alt="" />
            <img className={`img-fluid ${styles.bell} ${styles.floatingIcon}`} src={bell} alt="" />
            <img className={`img-fluid ${styles.seven} ${styles.floatingIcon}`} src={seven} alt="" />
            <img className={`img-fluid ${styles.dice} ${styles.floatingIcon}`} src={dice} alt="" />
            <h1 data-aos="fade-down" className={`text-center fw-bold ${styles.title}`}>Welcome to <span className="text-primary">sebm1337.com</span></h1>
            <p data-aos="fade-down" className='text-center'>Exclusive Rewards, Bonuses & Monthly Leaderboard Competitions</p>
            <a href='#Bonuses' className="d-flex justify-content-center mt-5">
                <MagicScrollButton />
            </a>
        </div>
    );
}

export default Hero;
