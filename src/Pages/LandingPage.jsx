import React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import BarberQShops from "../Components/BarberQShops";
import MovingBackground from "../Components/MovingBG";
import ReviewSection from "../Components/ReviewSection";
import SearchByArea from "../Components/searchByArea";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovingBackground>
        <div className="font-roboto">
          <NavBar />
          <HeroSection />
          <SearchByArea />
          <BarberQShops />
          <ReviewSection />
          <Footer />
        </div>
      </MovingBackground>
    </>
  );
};

export default LandingPage;
