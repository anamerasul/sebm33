import React from 'react';
import styles from './index.module.css'
import img from '../../../assets/images/how-to-register/section-4.png'

const SectionFour = () => {
    return (
        <div className="skewed-container">
            <div className="container">
                <div className="row gap-4">
                    <div data-aos="fade-right" className="col-md">
                        <img src={img} className='mw-100' alt="" />
                    </div>
                    <div data-aos="fade-left" className="col-md-4 align-self-center">
                        <h1><span className="title text-primary">Enter</span> CODE "SEBM"</h1>
                        <p>Enter the code <span className="text-primary">"SEBM"</span> to unlock all the available rewards.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
