'use client';

import { FiCheck, FiAward, FiDollarSign } from 'react-icons/fi';
import Section from '../ui/Section';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
      <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full text-amber-800 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: FiCheck,
      title: 'Real Wood',
      description: 'All our furniture is crafted from authentic, high-quality wood sourced responsibly from sustainable forests.',
    },
    {
      icon: FiAward,
      title: 'Timeless Quality',
      description: 'Built to last generations with traditional craftsmanship and attention to detail that stands the test of time.',
    },
    {
      icon: FiDollarSign,
      title: 'Affordable Prices',
      description: 'Premium furniture without the premium price tag. We offer fair prices on all our handcrafted pieces.',
    },
  ];

  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
        <p className="text-lg text-gray-600">
          At Texas Casa Decor, we believe in creating furniture that brings warmth, character, and lasting value to your home.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </Section>
  );
};

export default ValuesSection;
