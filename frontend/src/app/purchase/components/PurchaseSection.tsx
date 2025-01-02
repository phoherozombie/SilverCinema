'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DateSelector from './DateSelector';
import MovieSelector from './MovieSelector';
import PictureQualitySelector from './PictureQualitySelector';
import SeatSelector from './SeatSelector';
import PayMethodSelector from './PayMethodSelector';
import BarLoader from 'react-spinners/BarLoader';
import { useRouter } from 'next/navigation';

const currentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const PurchaseSection = () => {
  const router = useRouter();
  const [hallData, setHallData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHallData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/halls`);
        setHallData(response.data as any[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHallData();
  }, []);

  if (loading) {
    return <BarLoader color="#FF5252" loading={loading} />;
  }

  return (
    <section className="bg-gray-900 p-8 rounded-lg shadow-lg py-20">
      <h1 className="text-3xl font-extrabold text-white mb-6 text-left">Purchase Tickets</h1>
      <div className="space-y-6">
        <DateSelector />
        <MovieSelector />
        <PictureQualitySelector />
        <SeatSelector hallData={hallData} />
        <PayMethodSelector />
      </div>
      <button
        onClick={() => router.push('/confirmation')}
        className="mt-6 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
      >
        Proceed to Payment
      </button>
    </section>
  );
};

export default PurchaseSection;
