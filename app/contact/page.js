"use client"
import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/goku-4014',
      defaultColor: 'text-gray-800',
      hoverColor: 'hover:text-[#333]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/manishchauhan_1306',
      defaultColor: 'text-gray-800',
      hoverColor: 'hover:text-[#E4405F]'
    },
    // {
    //   name: 'LinkedIn',
    //   icon: Linkedin,
    //   url: 'https://linkedin.com/in/you',
    //   defaultColor: 'text-gray-800',
    //   hoverColor: 'hover:text-[#0A66C2]'
    // },
    // {
    //   name: 'Twitter',
    //   icon: Twitter,
    //   url: 'https://twitter.com/yourusername',
    //   defaultColor: 'text-gray-800',
    //   hoverColor: 'hover:text-[#1DA1F2]'
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">Have a question or want to work together? Let's connect!</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.defaultColor} ${social.hoverColor} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <IconComponent className="h-8 w-8" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <Mail className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">mightymanish8@gmail.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <Phone className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 63770 60477</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <MapPin className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Rajasthan, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;