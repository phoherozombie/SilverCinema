'use client';
import React, { useState } from 'react';

const PayMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    console.log('Selected Payment Method:', event.target.value);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <label htmlFor="payment-method" className="block text-white text-lg font-bold mb-2">
        Select a Payment Method
      </label>
      <select
        id="payment-method"
        name="payment-method"
        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        value={selectedMethod}
        onChange={handleMethodChange}
      >
        <option value="" disabled>
          Choose a payment method
        </option>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="google-pay">Google Pay</option>
        <option value="apple-pay">Apple Pay</option>
      </select>
    </div>
  );
};

export default PayMethodSelector;
