'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.location}</p>
        <Link 
          href={`/shop/${product.id}`} 
          className="inline-flex items-center text-amber-800 text-sm font-medium hover:text-amber-600"
        >
          View Details <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  // Sample product data (in a real app, this would come from an API or CMS)
  const products = [
    {
      id: 'bar-7ft',
      name: '7\' L-Shape Bar',
      location: 'Weatherford Location',
      image: '/images/products/bar.jpg',
    },
    {
      id: 'hutch-6ft',
      name: '6\' Mixed Wood Hutch',
      location: 'New Braunfels',
      image: '/images/products/hutch.jpg',
    },
    {
      id: 'table-set-7ft',
      name: '7\' Table Set',
      location: 'Weatherford Location',
      image: '/images/products/table-set.jpg',
    },
    {
      id: 'panel-desk-6ft',
      name: '6\' Panel Desk',
      location: 'NB & WF',
      image: '/images/products/desk.jpg',
    },
    {
      id: 'oak-table-7ft',
      name: '7\' Red Oak Table',
      location: 'Weatherford',
      image: '/images/products/oak-table.jpg',
    },
    {
      id: 'juniper-table-nb',
      name: 'Juniper Table',
      location: 'New Braunfels',
      image: '/images/products/juniper-table.jpg',
    },
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">New Items in Store</h2>
          <Link 
            href="/shop" 
            className="inline-flex items-center text-amber-800 font-medium hover:text-amber-600"
          >
            View More in our Catalog <FiArrowRight className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
