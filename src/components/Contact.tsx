// src/components/Contact.tsx
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      // Here you would typically send the message to a server
      // For demonstration, we'll just simulate a success response
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a network delay
      setSubmittedMessage(`Thank you, ${form.name}! Your message has been sent.`);
      setForm({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error);
      setError('Error sending message, please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have questions about GreenInsight or want to discuss a project? 
            I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center text-gray-600">
              <Mail className="w-6 h-6 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>info@aypersonal.com</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Phone className="w-6 h-6 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+252-619-443333</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin className="w-6 h-6 mr-3" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>Taleex Aaran Plaza, Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
          {submittedMessage && <div className="mt-4 text-green-600">{submittedMessage}</div>}
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
