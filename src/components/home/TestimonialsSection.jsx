'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Section from '../ui/Section';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Weatherford, TX',
      rating: 5,
      text: 'The dining table we purchased is absolutely stunning. The craftsmanship is exceptional, and it has become the centerpiece of our home. We couldn\'t be happier with our purchase!',
      avatar: '/images/testimonials/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'New Braunfels, TX',
      rating: 5,
      text: 'We had Texas Casa Decor create a custom entertainment center for our living room. The attention to detail and quality of work exceeded our expectations. Highly recommend!',
      avatar: '/images/testimonials/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Emily Thompson',
      location: 'El Paso, TX',
      rating: 5,
      text: 'The customer service was outstanding from start to finish. They helped us find the perfect pieces for our new home, and everything was delivered on time and in perfect condition.',
      avatar: '/images/testimonials/avatar-3.jpg',
    },
    {
      id: 4,
      name: 'David Wilson',
      location: 'Austin, TX',
      rating: 4,
      text: 'We drove all the way from Austin to visit the Weatherford location and it was worth every mile. The quality of their furniture is unmatched, and the prices are very reasonable.',
      avatar: '/images/testimonials/avatar-4.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible testimonials based on screen size
  // For mobile: 1, tablet: 2, desktop: 3
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };

  const visibleTestimonials = () => {
    const count = getVisibleCount();
    const result = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We take pride in delivering exceptional quality and service to our customers across Texas.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex space-x-6 overflow-hidden">
          {visibleTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button 
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-amber-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
