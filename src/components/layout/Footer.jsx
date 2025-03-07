'use client';

import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
	const locations = [
		{
			city: 'Weatherford, Texas',
			phone: '(682)-262-1017',
			address: '319 York Ave, Weatherford, TX 76086',
		},
		{
			city: 'New Braunfels, Texas',
			phone: '(830)-837-5777',
			address: '651 N IH 35 840, New Braunfels, TX 78130',
		},
		{
			city: 'El Paso, Texas',
			phone: '(915)-585-6460',
			address: '6018 Doniphan Dr, El Paso, TX 79932',
		},
	];

	return (
		<footer className='bg-white text-gray-800 border-t border-gray-200'>
			<div className='container mx-auto px-4 pt-16 pb-8'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{/* Company Info */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6'>
							Texas Casa Decor
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link href='/about' className='text-gray-600 hover:text-gray-900'>
									Our Story
								</Link>
							</li>
							<li>
								<Link href='/sustainability' className='text-gray-600 hover:text-gray-900'>
									Sustainability
								</Link>
							</li>
							<li>
								<Link href='/careers' className='text-gray-600 hover:text-gray-900'>
									Careers
								</Link>
							</li>
							<li>
								<Link href='/blog' className='text-gray-600 hover:text-gray-900'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6'>
							Customer Service
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link href='/help' className='text-gray-600 hover:text-gray-900'>
									Help Center
								</Link>
							</li>
							<li>
								<Link href='/delivery' className='text-gray-600 hover:text-gray-900'>
									Delivery Information
								</Link>
							</li>
							<li>
								<Link href='/returns' className='text-gray-600 hover:text-gray-900'>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link href='/warranty' className='text-gray-600 hover:text-gray-900'>
									Warranty
								</Link>
							</li>
							<li>
								<Link href='/contact' className='text-gray-600 hover:text-gray-900'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6'>
							Resources
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link href='/design-services' className='text-gray-600 hover:text-gray-900'>
									Design Services
								</Link>
							</li>
							<li>
								<Link href='/custom' className='text-gray-600 hover:text-gray-900'>
									Custom Furniture
								</Link>
							</li>
							<li>
								<Link href='/care' className='text-gray-600 hover:text-gray-900'>
									Care & Maintenance
								</Link>
							</li>
							<li>
								<Link href='/catalog' className='text-gray-600 hover:text-gray-900'>
									Request Catalog
								</Link>
							</li>
						</ul>
					</div>

					{/* Locations */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6'>
							Our Locations
						</h3>
						<div className='space-y-4 text-sm'>
							{locations.map((location, index) => (
								<div key={index}>
									<p className='font-medium text-gray-900'>{location.city}</p>
									<p className='text-gray-600'>{location.phone}</p>
									<p className='text-gray-600'>{location.address}</p>
								</div>
							))}
							<Link 
								href='/locations' 
								className='inline-flex items-center text-gray-900 font-medium mt-2'
							>
								All Locations <FiArrowRight className='ml-2' />
							</Link>
						</div>
					</div>
				</div>

				{/* Social and Newsletter */}
				<div className='flex flex-col md:flex-row justify-between items-start border-t border-gray-200 pt-8 pb-8'>
					<div className='flex space-x-6 mb-6 md:mb-0'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-900'
							aria-label='Instagram'
						>
							<FiInstagram className='h-5 w-5' />
						</a>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-900'
							aria-label='Facebook'
						>
							<FiFacebook className='h-5 w-5' />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-900'
							aria-label='Twitter'
						>
							<FiTwitter className='h-5 w-5' />
						</a>
					</div>
					
					<div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8'>
						<Link href='/privacy' className='text-sm text-gray-600 hover:text-gray-900'>
							Privacy Policy
						</Link>
						<Link href='/terms' className='text-sm text-gray-600 hover:text-gray-900'>
							Terms of Service
						</Link>
						<Link href='/accessibility' className='text-sm text-gray-600 hover:text-gray-900'>
							Accessibility
						</Link>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-sm text-gray-600'>
					&copy; {new Date().getFullYear()} Texas Casa Decor. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
