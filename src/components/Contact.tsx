'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#040B24]/80 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0A0F2C] text-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0A0F2C] text-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0A0F2C] text-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full font-medium py-3 px-6 rounded transition-colors ${
                  status === 'loading' 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          <div className="bg-[#040B24]/80 p-6 rounded-lg flex flex-col items-center justify-center">
            <div className="aspect-video w-full bg-[#0A0F2C] rounded-lg flex items-center justify-center mb-4">
              <div className="text-gray-400 text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg">YouTube Video Placeholder</p>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="bg-[#0A0F2C] rounded p-4 text-center">
                <p className="text-gray-400">Affiliate Promotion 1</p>
              </div>
              <div className="bg-[#0A0F2C] rounded p-4 text-center">
                <p className="text-gray-400">Affiliate Promotion 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 