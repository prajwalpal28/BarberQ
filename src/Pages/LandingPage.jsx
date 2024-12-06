import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '@/Components/HeroSection';
import Recommendation from '@/Components/Recommendation';

const LandingPage = () => {
    return (
        <>
            <div className='min-h-max bg-custom-linear-gradient'
                >
                <div className="font-roboto">
                    <NavBar />
                    <HeroSection/>
                    <Recommendation/>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
