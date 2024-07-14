import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

const Bonuses = () => {
    const [bonuses, setBonuses] = useState([]);
    const [importedImages, setImportedImages] = useState({});

    useEffect(() => {
        axios.get('https://sebm-backend-2.vercel.app/bonuses')
            .then(response => {
                setBonuses(response.data);
                // Dynamically import images and store them in importedImages state
                const newImages = {};
                response.data.forEach((bonus, index) => {
                    const imageName = `card_${index + 1}_img`;
                    import(`../../assets/images/bonuses/${bonus.image}`).then(image => {
                        newImages[imageName] = image.default;
                        setImportedImages(prevState => ({ ...prevState, ...newImages }));
                    });
                });
            })
            .catch(error => {
                console.error('Error fetching bonuses:', error);
            });
    }, []);

    return (
        <div className='inner-container'>
            <div className="container">
                <h1 className="title text-center">Casino <span className='text-primary'>Bonuses</span></h1>
                <p className='text-center'>Find all casino bonuses here</p>
            </div>
            <div className="container">
                <div className="row">
                    {bonuses.map((bonus, index) => (
                        <div className="col-md-4" key={bonus.id}>
                            <div className={`${styles.card} card my-2 card-${bonus.color}`}>
                                <div className={`${styles.cardImgTopWrapper} m-auto`}>
                                    <img src={importedImages[`card_${index + 1}_img`]} className="card-img-top mw-100" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="fw-bold text-center">{bonus.headline}</h5>
                                    <div className="card-text">Bonus Conditions:
                                        <ul>
                                            {bonus.conditions.split("||").map((condition, index) => (
                                                <li key={index}>{condition.trim()}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <a target="_blank" href={bonus.link} className="btn btn-primary mt-2">Claim Bonus</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bonuses;
