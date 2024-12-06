import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '@/Components/HeroSection';
import BarberQShops from '@/Components/BarberQShops';

const LandingPage = () => {
    return (
        <>
            <div className='min-h-max bg-custom-linear-gradient'
                >
                <div className="font-roboto">
                    <NavBar />
                    <HeroSection/>
                    <BarberQShops/>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
