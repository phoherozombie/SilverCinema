'use client';
import React, { useState } from 'react';
import AdminMovieAddSection from './components/AdminMovieAddSection';
import AdminShowtimesAddSection from './components/AdminShowtimesAddSection';
import AdminShownInModifySection from './components/AdminShownInModifySection';
import AdminDashboardPrimary from './components/AdminDashboardPrimary';

const AdminPage = () => {
  const [selectedShowDate, setSelectedShowDate] = useState("");

  const handleSelectedDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShowDate(e.target.value);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <AdminDashboardPrimary />
      <AdminMovieAddSection />
      <AdminShowtimesAddSection
        selectedShowDate={selectedShowDate}
        setSelectedShowDate={setSelectedShowDate}
        handleSelectedDate={handleSelectedDate}
      />
      <AdminShownInModifySection selectedDate={selectedShowDate} />
    </div>
  );
};

export default AdminPage;
