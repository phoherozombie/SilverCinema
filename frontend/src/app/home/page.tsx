'use client';
import React from 'react';
import HeroSection from './components/HeroSection';
import HomeCollection from './components/HomeCollection';
import Features from './components/Features';
import SocialLinks from './components/SocialLink';

const HomePage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <HeroSection />
            <HomeCollection />
            <Features />
            <SocialLinks />
        </div>
    );
};

export default HomePage;
