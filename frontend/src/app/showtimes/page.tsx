'use client';
import React from 'react';
import ShowTimesHeader from "./components/ShowTimesHeader";
import ShowTimesCollection from "./components/ShowTimesCollection";

const ShowtimesPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <ShowTimesHeader />
            <ShowTimesCollection />
        </div>
    );
};

export default ShowtimesPage;
