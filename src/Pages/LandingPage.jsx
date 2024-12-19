import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import BarberQShops from '../Components/BarberQShops';
import MovingBackground from '../Components/MovingBG';
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer';

const LandingPage = () => {
    return (
        <>
            <MovingBackground>
                <div className="font-roboto">
                    <NavBar />
                    <HeroSection />
                    <BarberQShops />
                    <ReviewSection />
                    <Footer />
                </div>
            </MovingBackground>
        </>
    );
};

export default LandingPage;

