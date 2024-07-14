import React from 'react';
import styles from './index.module.css';
import img from '../../../assets/images/home/level-up.png';

const LevelUpReward = () => {
    return (
        <div className="container">
            <div data-aos="fade-right" data-aos-offset="500" className='inner-container d-flex flex-column gap-5'>
                <h1 id='Bonuses' className={`${styles.title} text-center py-4`}>Exclusive Level Up Rewards</h1>
                <div className="row gap-5 flex-column-reverse flex-md-row">
                    <div className="col-md align-self-center">
                        <p>
                            Here comes the GOOD Stuff! Enjoy a huge variety of <span className='text-primary'>Exclusive Level Up Rewards.</span> You can earn a minimum of <span className="text-primary">$25 up to $10,000</span> just by playing on one the most rewarding Crypto Casino out there. You can claim Rewards by sending a DM to us!
                        </p>
                        <a href='https://500.casino/r/SEBM' target='_blank' className="btn btn-primary px-5">More Informations</a>
                    </div>
                    <div className="col-md">
                        <img src={img} className='w-100 mb-3 img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LevelUpReward;
