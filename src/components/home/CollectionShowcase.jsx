'use client';

import Image from 'next/image';
import Button from '../ui/Button';

const CollectionShowcase = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fractal-collection-bg.jpg"
          alt="Fractal Collection"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-lg bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Fractal Collection</h2>
          <p className="text-gray-700 mb-6">
            Our newest line of furniture combines the natural beauty of wood with modern design elements. 
            Each piece in the Fractal Collection features unique patterns inspired by nature's mathematical precision.
          </p>
          <Button 
            href="/fractal-collection" 
            variant="primary" 
            size="lg"
          >
            Explore the Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
