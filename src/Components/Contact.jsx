import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:1si22ec099@sit.ac.in?subject=Contact from ${name}&body=${message}`;
  };

  return (
    <section className="bg-white text-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-full sm:max-w-4xl mx-auto my-10 border border-gray-300 overflow-hidden min-w-full">
      <div className="flex justify-start">
  <h2 className="text-3xl sm:text-3xl md:text-3xl font-semibold mb-4 text-center text-gray-900 inline-block border-b-2 border-blue-300 relative pl-3 group">
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 w-2.5 h-2.5 rounded-full group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300"></div>
    DROP A LINE
  </h2>
</div>


      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {/* Name Field */}
        <div>
          <label
            className="block text-gray-600 font-medium mb-2 text-sm"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-800 ease-in-out"
            placeholder="Enter Your Full Name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            className="block text-gray-600 font-medium mb-2 text-sm"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-800 ease-in-out"
            placeholder="Enter Your Email"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            className="block text-gray-600 font-medium mb-2 text-sm"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-800 ease-in-out"
            rows="5"
            placeholder="What would you like to discuss?"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
