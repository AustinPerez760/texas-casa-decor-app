'use client';

import Link from 'next/link';
import {
	FiInstagram,
	FiFacebook,
	FiTwitter,
	FiArrowRight,
} from 'react-icons/fi';

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
		<footer className='bg-[var(--texas-turquoise)] bg-opacity-10 text-[var(--texas-brown)] border-t border-[var(--texas-tan)] border-opacity-30'>
			<div className='container mx-auto px-4 pt-16 pb-8'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{/* Company Info */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6 text-[var(--texas-brown)]'>
							Texas Casa Decor
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/about'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href='/sustainability'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Sustainability
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6 text-[var(--texas-brown)]'>
							Customer Service
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/help'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href='/delivery'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Delivery Information
								</Link>
							</li>
							<li>
								<Link
									href='/returns'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									href='/warranty'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Warranty
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6 text-[var(--texas-brown)]'>
							Resources
						</h3>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/design-services'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Design Services
								</Link>
							</li>
							<li>
								<Link
									href='/custom'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Custom Furniture
								</Link>
							</li>
							<li>
								<Link
									href='/care'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Care & Maintenance
								</Link>
							</li>
							<li>
								<Link
									href='/catalog'
									className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
									Request Catalog
								</Link>
							</li>
						</ul>
					</div>

					{/* Locations */}
					<div>
						<h3 className='text-sm font-medium uppercase tracking-wide mb-6 text-[var(--texas-brown)]'>
							Our Locations
						</h3>
						<div className='space-y-4 text-sm'>
							{locations.map((location, index) => (
								<div key={index}>
									<p className='font-medium text-[var(--texas-brown)]'>
										{location.city}
									</p>
									<p className='text-[var(--texas-leather)]'>
										{location.phone}
									</p>
									<p className='text-[var(--texas-leather)]'>
										{location.address}
									</p>
								</div>
							))}
							<Link
								href='/locations'
								className='inline-flex items-center text-[var(--texas-sunset)] font-medium mt-2 hover:text-[var(--texas-clay)]'>
								All Locations <FiArrowRight className='ml-2' />
							</Link>
						</div>
					</div>
				</div>

				{/* Social and Newsletter */}
				<div className='flex flex-col md:flex-row justify-between items-start border-t border-[var(--texas-tan)] border-opacity-30 pt-8 pb-8'>
					<div className='flex space-x-6 mb-6 md:mb-0'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'
							aria-label='Instagram'>
							<FiInstagram className='h-5 w-5' />
						</a>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'
							aria-label='Facebook'>
							<FiFacebook className='h-5 w-5' />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'
							aria-label='Twitter'>
							<FiTwitter className='h-5 w-5' />
						</a>
					</div>

					<div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8'>
						<Link
							href='/privacy'
							className='text-sm text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
							Privacy Policy
						</Link>
						<Link
							href='/terms'
							className='text-sm text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
							Terms of Service
						</Link>
						<Link
							href='/accessibility'
							className='text-sm text-[var(--texas-leather)] hover:text-[var(--texas-brown)]'>
							Accessibility
						</Link>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-sm text-[var(--texas-leather)]'>
					&copy; {new Date().getFullYear()} Texas Casa Decor. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
