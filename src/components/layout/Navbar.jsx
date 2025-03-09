'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navLinks = [
		{ name: 'LIVING', href: '/shop/living' },
		{ name: 'DINING', href: '/shop/dining' },
		{ name: 'BEDROOM', href: '/shop/bedroom' },
		{ name: 'OFFICE', href: '/shop/office' },
		{ name: 'OUTDOOR', href: '/shop/outdoor' },
		{ name: 'CUSTOM', href: '/custom' },
		{ name: 'LOCATIONS', href: '/locations' },
	];

	return (
		<header className='fixed top-0 w-full z-50'>
			{/* Announcement Bar */}
			<div className='bg-[var(--texas-sand)] bg-opacity-20 py-2 text-center text-sm font-medium text-[var(--texas-brown)]'>
				Free delivery on orders over $1,500.{' '}
				<Link
					href='/delivery'
					className='underline text-[var(--texas-leather)]'>
					Learn more
				</Link>
			</div>

			{/* Main Navbar */}
			<nav
				className={`bg-white transition-all duration-300 ${
					isScrolled ? 'shadow-md' : ''
				}`}>
				<div className='container mx-auto px-4'>
					<div className='flex items-center justify-between h-16'>
						{/* Mobile Menu Button */}
						<div className='md:hidden'>
							<button
								onClick={toggleMenu}
								className='text-[var(--texas-brown)] focus:outline-none'
								aria-label='Toggle menu'>
								{isMenuOpen ? (
									<FiX className='h-6 w-6' />
								) : (
									<FiMenu className='h-6 w-6' />
								)}
							</button>
						</div>

						{/* Logo */}
						<div className='flex-shrink-0'>
							<Link href='/' className='flex items-center space-x-3'>
								<div className='relative h-10 w-12'>
									<Image
										src='/images/products/txDecorLogo.png'
										alt='Texas Casa Decor Logo'
										fill
										className='object-contain'
										priority
										sizes='(max-width: 768px) 50vw, 25vw'
									/>
								</div>
								<span className='text-xl font-medium tracking-tight text-[var(--texas-brown)]'>
									CASA DECOR
								</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className='hidden md:flex space-x-10 ml-16'>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className='text-sm font-medium text-[var(--texas-brown)] hover:text-[var(--texas-leather)] tracking-wide'>
									{link.name}
								</Link>
							))}
						</div>

						{/* Icons */}
						<div className='flex items-center space-x-2'>
							<button
								className='text-[var(--texas-brown)] hover:text-[var(--texas-leather)] focus:outline-none'
								aria-label='Search'>
								<FiSearch className='h-5 w-5' />
							</button>
							<Link
								href='/account'
								className='text-[var(--texas-brown)] hover:text-[var(--texas-leather)]'
								aria-label='Account'>
								<FiUser className='h-5 w-5' />
							</Link>
							<Link
								href='/cart'
								className='text-[var(--texas-brown)] hover:text-[var(--texas-leather)]'
								aria-label='Cart'>
								<FiShoppingCart className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
					isMenuOpen ? 'max-h-screen' : 'max-h-0'
				}`}>
				<div className='container mx-auto px-4 py-4'>
					<div className='flex flex-col space-y-4'>
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className='text-sm font-medium text-[var(--texas-brown)] hover:text-[var(--texas-leather)] py-2 tracking-wide'
								onClick={() => setIsMenuOpen(false)}>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
