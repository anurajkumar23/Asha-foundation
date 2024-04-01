"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from "react-hot-toast"

interface FormData {
  campings: string;
  citizenship: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  governmentId: string;
  address: string;
  pincode: string;
  state: string;
  city: string;
  amount: number;
  isPaid: boolean;
}

interface Props {
  campings: string;
}

export default function DonateForm({ campings }: Props): JSX.Element {
  const [formData, setFormData] = useState({
    campaign: campings,
    citizenship: 'Indian',
    fullName: '',
    email: '',
    phoneNumber: '',
    governmentId: '',
    address: '',
    pincode: '',
    state: '',
    city: '',
    amount: 1000,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const URL = `${process.env.NEXT_PUBLIC_API_URL}/donations`;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        mode: 'cors', // Ensure CORS mode is set to 'cors'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send formData directly
      });

      console.log(formData)

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle success, e.g., show success message
      console.log('Form submitted successfully');
      toast.success('Form submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form:');
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <div className=" mx-[5%] mt-8 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center ">Donate Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">
            Campings:
            <input
              type="text"
              name="campings"
              value={campings}
              readOnly
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Donation Amount * :
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Citizenship * :
            <select
              name="citizenship"
              value={formData.citizenship}
              onChange={handleInputChange}
              required
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="Indian">Indian</option>
              <option value="Foreign">Foreign</option>
            </select>
          </label>
        </div>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-2">
            Full Name * :
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* Email ID */}
        <div className="mb-4">
          <label className="block mb-2">
            Email ID * :
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label className="block mb-2">
            Phone Number * :
            <input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* Government ID or PAN Card */}
        <div className="mb-4">
          <label className="block mb-2">
            {formData.citizenship === 'Indian' ? 'PAN Card *' : 'Government ID *'}:
            <input
              type="text"
              name="governmentId"
              required
              value={formData.governmentId}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* Address */}
        <div className="mb-4">
          <label className="block mb-2">
            Address *:
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* Pincode */}
        <div className="mb-4">
          <label className="block mb-2">
            Pincode * :
            <input
              type="text"
              name="pincode"
              required
              value={formData.pincode}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* State */}
        <div className="mb-4">
          <label className="block mb-2">
            State * :
            <input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {/* City */}
        <div className="mb-4">
          <label className="block mb-2">
            City * :
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Donate
        </button>
      </form>
    </div>
  );
}
