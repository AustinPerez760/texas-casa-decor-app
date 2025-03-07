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
    <header className="fixed top-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-gray-100 py-2 text-center text-sm font-medium">
        Free delivery on orders over $1,500. <Link href="/delivery" className="underline">Learn more</Link>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-medium tracking-tight text-gray-900">
                  TEXAS CASA DECOR
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-gray-600 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
                aria-label="Search"
              >
                <FiSearch className="h-5 w-5" />
              </button>
              <Link
                href="/account"
                className="text-gray-800 hover:text-gray-600"
                aria-label="Account"
              >
                <FiUser className="h-5 w-5" />
              </Link>
              <Link
                href="/cart"
                className="text-gray-800 hover:text-gray-600"
                aria-label="Cart"
              >
                <FiShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-gray-600 py-2 tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
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
