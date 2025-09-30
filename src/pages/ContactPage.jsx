import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/users/signup', formData);
      setResponse(res.data.message); // "User signed up successfully"
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponse(error.response?.data?.message || 'Error sending message');
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Response Message */}
        {response && <p className="mt-4 text-center text-green-600">{response}</p>}
      </div>
    </section>
  );
}
