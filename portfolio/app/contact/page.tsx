"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from "next/legacy/image";
import MarkDuraidpic from '../../public/images/MD13bgRemoved.png';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const currentTime = new Date().toLocaleString();

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: currentTime
    };

    emailjs.send(
      'service_4ksmqbu', 
      'template_zhi8et3', 
      dataToSend,
      'DHLvfygrR-zd1e8dX' 
    ).then((result) => {
      console.log(result.text);
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000); // Hide success message after 3 seconds
    }, (error) => {
      console.log(error.text);
      setIsLoading(false);
      alert('Failed to send message, please try again.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: "url('/images/6191107.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex-grow flex items-center justify-center mt-16 py-16 pt-12 pb-20 sm:pb-16 md:pb-0">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Contact <span className="text-yellow-500">Me</span>
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Full Name <span className="text-yellow-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email <span className="text-yellow-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message <span className="text-yellow-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
            {isLoading && <div className="mt-4 text-white">Loading...</div>}
            {isSuccess && <div className="mt-4 text-green-500">✔ Message sent successfully!</div>}
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center">
            <Image
              src={MarkDuraidpic}
              alt="Mark Duraid Logo"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
