import React from 'react';
import Hero from './Hero/Hero';
import Bonuses from './Bonuses/Bonuses';
import LevelUpReward from './LevelUpReward/LevelUpReward';
import MonthlyLeaderboard from './MonthlyLeaderboard/MonthlyLeaderboard';

const Home = () => {
    return (
        <div>
            <Hero />
            <Bonuses />
            <LevelUpReward />   
            <MonthlyLeaderboard />   
        </div>
    );
}

export default Home;
