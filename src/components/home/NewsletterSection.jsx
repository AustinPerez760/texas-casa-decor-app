'use client';

import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import Section from '../ui/Section';
import Button from '../ui/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section background="dark" className="bg-amber-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 bg-amber-800/50 rounded-full mb-6">
          <FiMail className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Connect with us</h2>
        <p className="text-lg text-amber-100 mb-8">
          Sign up to receive a monthly email with exclusive offers and a look at new merchandise!
        </p>
        
        {isSuccess ? (
          <div className="bg-green-800/30 text-green-100 p-4 rounded-lg mb-6">
            Thank you for subscribing! We've sent a confirmation email to your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <Button
                type="submit"
                variant="primary"
                className="bg-white text-amber-900 hover:bg-amber-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
            <p className="text-amber-200 mt-3 text-sm">We respect your privacy.</p>
          </form>
        )}
      </div>
    </Section>
  );
};

export default NewsletterSection;
