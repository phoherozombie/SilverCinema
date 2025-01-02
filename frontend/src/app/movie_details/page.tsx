'use client';
import React from 'react';
import MovieInfoSection from './components/MovieInfoSection';
import MovieInfoCollection from './components/MovieInfoCollection';

const MovieDetailsPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <MovieInfoSection />
            <MovieInfoCollection />
        </div>
    );
};

export default MovieDetailsPage;
