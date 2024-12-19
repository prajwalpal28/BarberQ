import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import time from "../assets/time.png";
import date from "../assets/date.png";
import location from "../assets/location.png";
import search from "../assets/search.png";
import heroImg from "../assets/heroImage.jpg"

const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <img src={heroImg} className='h-screen w-full absolute -z-50 opacity-60' />
            {/* Title Section */}
            <div className="text-left text-5xl md:text-7xl font-bold mb-14">
                <h1>
                    Book local beauty and <br /> wellness services
                </h1>
            </div>

            {/* Search Bar Section */}
            <div className="flex justify-center items-center border-2 rounded-full shadow-lg p-3 bg-white w-full max-w-5xl">
                {/* Treatments and Venues */}
                <div className="flex items-center px-4 border-r">
                    <img className="h-5 w-5 mr-3" src={search} alt="search" />
                    <Input
                        className="border-none outline-none focus:ring-0 w-full placeholder:text-gray-500"
                        type="text"
                        placeholder="All treatments and venues"
                    />
                </div>

                {/* Location */}
                <div className="flex items-center px-4 border-r">
                    <img className="h-5 w-5 mr-3" src={location} alt="location" />
                    <Input
                        className="border-none outline-none focus:ring-0 w-full placeholder:text-gray-500"
                        type="text"
                        placeholder="Current location"
                    />
                </div>

                {/* Date */}
                <div className="flex items-center px-4 border-r">
                    <img className="h-5 w-5 mr-3" src={date} alt="date" />
                    <Input
                        className="border-none outline-none focus:ring-0 w-full placeholder:text-gray-500"
                        type="text"
                        placeholder="Any date"
                    />
                </div>

                {/* Time */}
                <div className="flex items-center px-4">
                    <img className="h-5 w-5 mr-3" src={time} alt="time" />
                    <Input
                        className="border-none outline-none focus:ring-0 w-full placeholder:text-gray-500"
                        type="text"
                        placeholder="Any time"
                    />
                </div>

                {/* Search Button */}
                <div className="ml-4">
                    <Button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
