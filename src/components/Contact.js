import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // This is a mock submission.
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setFormStatus(''), 3000); // Clear status after 3 seconds
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">Contact Me</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        I'm currently open to new opportunities. Feel free to send me a message!
      </p>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-600 transition-all duration-300 w-full md:w-auto">
              Send Message
            </button>
          </div>
          {formStatus && <p className="text-center mt-4 text-green-400">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;