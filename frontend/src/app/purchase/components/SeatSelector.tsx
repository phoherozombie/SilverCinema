'use client';
import React, { useState } from 'react';

interface SeatSelectorProps {
  hallData: { id: string; name: string; total_seats: number; theatre_id: number}[];
}

const SeatSelector: React.FC<SeatSelectorProps> = ({ hallData }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeatSelection = (seat: string) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-bold mb-4">Select Your Seats</h2>
      <div className="grid grid-cols-5 gap-2">
        {hallData.map((seat) => (
          <button
            key={seat.id}
            className={`p-3 rounded text-white text-sm ${
              selectedSeats.includes(seat.id)
                ? 'bg-red-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => toggleSeatSelection(seat.id)}
          >
            {seat.name}
          </button>
        ))}
      </div>
      <div className="mt-4 text-white">
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default SeatSelector;
