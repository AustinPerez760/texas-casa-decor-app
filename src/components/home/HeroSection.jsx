'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section className='relative h-screen'>
			<Image
				src='/images/products/rusticLiving.jpg'
				alt='Texas Casa Decor furniture'
				fill
				priority
				className='object-cover'
				sizes='100vw'
			/>
			<div className='absolute inset-0 bg-black/30' />
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='text-center text-white max-w-3xl px-4'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight'>
						Authentic Rustic Furniture
					</h1>
					<p className='text-xl mb-8 font-light'>
						Handcrafted with real wood for your Texas home
					</p>
					<Link
						href='/shop'
						className='inline-block bg-white text-gray-900 px-8 py-3 font-medium tracking-wide'>
						SHOP NOW
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
