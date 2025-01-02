'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboardPrimary = () => {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/totalTickets`);
        setTicketData(response.data as any[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg py-20">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard Summary</h2>
      <p className="text-lg text-gray-400">Total Tickets Sold: <span className="text-red-500">{ticketData.length}</span></p>
    </div>
  );
};

export default AdminDashboardPrimary;
