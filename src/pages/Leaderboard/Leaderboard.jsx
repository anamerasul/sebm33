import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [remainingTime, setRemainingTime] = useState(null);

    // Array of prize values for bottom 7 boxes
    const prizeValues = [500, 300, 250, 200, 150, 100, 50];

    useEffect(() => {
        axios.get('https://sebm-backend-2.vercel.app/leaderboard')
            .then(response => {
                setLeaderboardData(response.data);
            })
            .catch(error => {
                console.error('Error fetching leaderboard data:', error);
            });


                    // Calculate remaining time until the end of the month
        const today = new Date();
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const millisecondsRemaining = endOfMonth.getTime() - today.getTime();
        const secondsRemaining = Math.floor(millisecondsRemaining / 1000);
        setRemainingTime(secondsRemaining);

        // Update remaining time every second
        const timer = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);
    
    // Function to add comma after every third number
    const addComma = (num) => {
        if (num !== undefined) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return ''; // Or whatever default value you want to return if num is undefined
        }
    }

    // Hardcoded CSS styles for the timer wrapper
    const timerWrapperStyle = {
        border: '1px solid #f8526e',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: '#f8526e',
        padding: '0.5rem 2.5rem',
        display: 'inline-block',
        backgroundColor: '#262230',
    };

        // Function to format seconds to D:H:M:S format
        const formatTime = (seconds) => {
            const days = Math.floor(seconds / (3600 * 24));
            const hours = Math.floor((seconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;
    
            return `${days}D ${hours}H ${minutes}M ${remainingSeconds}S`;
        };
    
        

    return (
        <div className='inner-container'>
            <div data-aos="fade-in" className="container">
                <h1 className="title text-center"><span className='text-primary'>$10,000</span> Monthlys Leaderboard</h1>
                <p className='text-center mx-auto' style={{ maxWidth: '600px' }}>All players who use my link to 500.casino or Code "SEBM" will be eligible for prizes on this Exclusive Leaderboard. Updates every 30 minutes.</p>
                <p className='text-center'>1M XP ~ $600</p>
            </div>
            <div className="container">
                <div className="row">
                    {/* Second Box */}
                    <div data-aos="fade-down" data-aos-delay="100" className="col-md-4 mt-5 pt-5 mb-md-5">
                        <div className={`${styles.card} card my-2`}>
                            <div className="card-header-half">2</div>
                            <h3 className="card-title text-center fw-bold">{leaderboardData[1]?.username}</h3>
                            <p className='fw-bold text-center py-3'>
                                Earned XP:
                                <br />
                                <span className='text-outline-primary'>{addComma(leaderboardData[1]?.xp)} XP</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $2,500</a>
                        </div>
                    </div>
                    {/* First Box */}
                    <div data-aos="fade-down" className="col-md-4 mt-5 pt-5 mb-md-5">
                        <div className={`${styles.card} card scaled-md my-2`}>
                            <div className="card-header-half">1</div>
                            <h3 className="card-title text-center fw-bold">{leaderboardData[0]?.username}</h3>
                            <p className='fw-bold text-center py-3'>
                                Earned XP:
                                <br />
                                <span className='text-outline-primary'>{addComma(leaderboardData[0]?.xp)} XP</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $5,000</a>
                        </div>
                    </div>

                    {/* Third Box */}
                    <div data-aos="fade-down" data-aos-delay="200" className="col-md-4 mt-5 pt-5 mb-md-5">
                        <div className={`${styles.card} card my-2`}>
                            <div className="card-header-half">3</div>
                            <h3 className="card-title text-center fw-bold">{leaderboardData[2]?.username}</h3>
                            <p className='fw-bold text-center py-3'>
                                Earned XP:
                                <br />
                                <span className='text-outline-primary'>{addComma(leaderboardData[2]?.xp)} XP</span>
                            </p>
                            <a href="#" className="btn btn-primary mt-2">Price: $1,000</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col text-center">
                        {remainingTime !== null && (
                            <div style={timerWrapperStyle}>{formatTime(remainingTime)}</div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>XP</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaderboardData.slice(3).map((user, index) => (
                                        <tr key={index} data-aos="fade-right" data-aos-delay={index * 200} data-aos-offset={-index * 200}>
                                            <td><div className='table-index'>{index + 4}</div></td>
                                            <td>{user.username}</td>
                                            <td>{addComma(user.xp)} XP</td>
                                            <td className='text-primary'>${addComma(prizeValues[index])}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
