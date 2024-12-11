import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import BarberQShops from '../Components/BarberQShops';
import MovingBackground from '../Components/MovingBG';

const LandingPage = () => {
    return (
        <MovingBackground>
            <div className="font-roboto">
                <NavBar />
                <HeroSection />
                <BarberQShops />
                
            </div>
        </MovingBackground>
    );
};

export default LandingPage;

