'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  HiCalendar,
  HiOutlineClock,
  HiOutlineCurrencyBangladeshi,
  HiOutlineMapPin,
  HiOutlineTicket,
  HiOutlineTv,
} from 'react-icons/hi2';
import { RiSofaLine } from 'react-icons/ri';
import Link from 'next/link';

interface CustomerProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: number;
}

interface CustomerTicket {
  movie_id: string;
  movie_name: string;
  show_type: string;
  ticket_ids: string;
  theatre_name: string;
  hall_name: string;
  seat_numbers: string;
  showtime_date: string;
  movie_start_time: string;
  ticket_price: string;
  purchase_date: string;
}

const CustomerInfoSection = () => {
  const [cusProData, setCusProData] = useState<CustomerProfile | null>(null);
  const [cusTicketData, setCusTicketData] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/api/users`, {
          email: '',
          password: '',
        });
        setCusProData(response.data[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading1(false);
      }

      try {
        const response = await axios.post(`http://localhost:3000/payments`, {
          email: '',
        });
        const formattedData = response.data.map((dataObj) => {
          const purDate = new Date(dataObj.purchase_date).toLocaleDateString('en-GB');
          const showDate = new Date(dataObj.showtime_date).toLocaleDateString('en-GB');
          return { ...dataObj, showtime_date: showDate, purchase_date: purDate };
        });
        setCusTicketData(formattedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading2(false);
      }
    };

    fetchData();
  }, []);

  const purchaseHtml = cusTicketData.map((cusTicket, id) => (
    <Link
      key={id}
      href={`/movieDetails/${cusTicket.movie_id}`}
      className="block p-4 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <h2 className="text-lg font-semibold text-white mb-2">{cusTicket.movie_name}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <HiOutlineTv size={18} />
            <p>{cusTicket.show_type}</p>
          </div>
          <div className="text-sm text-gray-400 mb-2">
            <HiOutlineTicket size={16} className="inline mr-1" /> Ticket No.: {cusTicket.ticket_ids}
          </div>
          <div className="text-sm text-gray-400 mb-2">
            <HiOutlineMapPin size={16} className="inline mr-1" /> {cusTicket.theatre_name} —{' '}
            {cusTicket.hall_name}
          </div>
          <div className="text-sm text-gray-400 mb-2">
            <RiSofaLine size={16} className="inline mr-1" /> {cusTicket.seat_numbers}
          </div>
          <div className="flex space-x-4 text-sm text-gray-400 mb-2">
            <div className="flex items-center space-x-1">
              <HiCalendar size={16} />
              <p>{cusTicket.showtime_date}</p>
            </div>
            <div className="flex items-center space-x-1">
              <HiOutlineClock size={16} />
              <p>{cusTicket.movie_start_time}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <HiOutlineCurrencyBangladeshi size={16} />
            <p>{cusTicket.ticket_price}</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Purchased at {cusTicket.purchase_date}</p>
        </div>
        <div className="md:w-1/4 md:ml-4">
          <div className="bg-gray-700 h-24 w-full rounded"></div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="py-20 bg-gray-900 w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-5xl font-bold text-white mb-4">Customer Info</h3>
        {loading1 ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded shadow mb-8">
            <p className="text-2xl font-semibold text-gray-400">Name:</p>
            <p className="text-2xl text-white mb-2">
              {cusProData ? `${cusProData.first_name} ${cusProData.last_name}` : 'Loading...'}
            </p>
            <p className="text-2xl font-semibold text-gray-400">Email:</p>
            <p className="text-2xl text-white mb-2">{cusProData?.email || 'Loading...'}</p>
            <p className="text-2xl font-semibold text-gray-400">Phone:</p>
            <p className="text-2xl text-white">{cusProData?.phone_number || 'Loading...'}</p>
          </div>
        )}

        <h3 className="text-4xl font-bold text-white mb-4">Purchase History</h3>
        {loading2 ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : cusTicketData.length === 0 ? (
          <p className="text-2xl text-left text-gray-400">You haven't purchased any ticket yet</p>
        ) : (
          <div className="grid gap-4">{purchaseHtml}</div>
        )}
      </div>
    </div>
  );
};

export default CustomerInfoSection;
