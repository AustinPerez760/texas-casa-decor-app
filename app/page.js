import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
	return (
		<div className='pt-20'>
			{/* Hero Section - Full-width image with minimal text overlay */}
			<section className='relative h-screen'>
				<Image
					src='/images/products/rusticLand.jpg'
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
							Inspired by the resilience of the American frontier
						</h1>
						<p className='text-xl mb-8 font-light'>
							Handcrafted with real wood for timeless durability
						</p>
						<Link
							href='/shop'
							className='inline-block bg-[#44c0c5] text-white px-8 py-3 font-medium tracking-wide hover:bg-[#3aa9ae] transition-colors'>
							SHOP NOW
						</Link>
					</div>
				</div>
			</section>

			{/* Category Navigation */}
			<section className='py-16 bg-white bg-opacity-10 text-[var(--texas-brown)]'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
						{[
							{
								name: 'Living',
								image: '/images/categories/livingRoom.jpg',
								path: '/shop/living',
							},
							{
								name: 'Dining',
								image: '/images/categories/diningRoom.jpg',
								path: '/shop/dining',
							},
							{
								name: 'Bedroom',
								image: '/images/categories/bedFrame.jpg',
								path: '/shop/bedroom',
							},
							{
								name: 'Office',
								image: '/images/categories/ofiice.jpg',
								path: '/shop/office',
							},
						].map((category) => (
							<Link key={category.name} href={category.path} className='group'>
								<div className='relative aspect-square overflow-hidden'>
									<Image
										src={category.image}
										alt={category.name}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-105'
										sizes='(max-width: 768px) 50vw, 25vw'
									/>
								</div>
								<h2 className='mt-4 text-lg font-medium text-center uppercase tracking-wide text-[var(--texas-brown)]'>
									{category.name}
								</h2>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Featured Collection */}
			<section className='py-16 bg-[var(--texas-sand)] bg-opacity-20 text-[var(--texas-brown)]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-light mb-12 text-center uppercase tracking-wide text-[var(--texas-brown)]'>
						The Fractal Collection
					</h2>
					<div className='relative aspect-[21/9] overflow-hidden'>
						<Image
							src='/images/products/fractal2.jpg'
							alt='Fractal Collection'
							fill
							className='object-cover'
							sizes='100vw'
						/>
						<div className='absolute inset-0 bg-black/20' />
						<div className='absolute inset-0 flex items-center justify-center'>
							<Link
								href='/fractal-collection'
								className='bg-[#44c0c5] text-white px-8 py-3 font-medium tracking-wide hover:bg-[#3aa9ae] transition-colors'>
								EXPLORE THE COLLECTION
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* New Arrivals */}
			<section className='py-16 bg-white text-[var(--texas-brown)]'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center mb-12'>
						<h2 className='text-2xl font-light uppercase tracking-wide mb-4 md:mb-0 text-[var(--texas-brown)]'>
							New Arrivals
						</h2>
						<Link
							href='/shop'
							className='flex items-center text-[#44c0c5] hover:text-[#3aa9ae] font-medium'>
							View All <FiArrowRight className='ml-2' />
						</Link>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{[
							{
								id: 'bar-7ft',
								name: '7" L-Shape Bar',
								location: 'Weatherford',
								image: '/images/products/shapedBar.jpg',
							},
							{
								id: 'hutch-6ft',
								name: "7' Table Set, Weatherford Location",
								location: 'Weatherford',
								image: '/images/products/roomTable.jpg',
							},
							{
								id: 'table-set-7ft',
								name: "7' Red Oak Table",
								location: 'Weatherford',
								image: '/images/products/oakTable.jpg',
							},
						].map((product) => (
							<Link
								key={product.id}
								href={`/shop/${product.id}`}
								className='group'>
								<div className='relative aspect-square overflow-hidden'>
									<Image
										src={product.image}
										alt={product.name}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-105'
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
									/>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-[var(--texas-brown)]'>
										{product.name}
									</h3>
									<p className='text-sm text-[var(--texas-leather)]'>
										{product.location} Location
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-16 bg-[var(--texas-sand)] bg-opacity-10 text-[var(--texas-brown)]'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								title: 'Real Wood',
								description:
									'All our furniture is crafted from authentic, high-quality wood sourced responsibly from sustainable forests.',
							},
							{
								title: 'Timeless Quality',
								description:
									'Built to last generations with traditional craftsmanship and attention to detail that stands the test of time.',
							},
							{
								title: 'Affordable Prices',
								description:
									'Premium furniture without the premium price tag. We offer fair prices on all our handcrafted pieces.',
							},
						].map((value, index) => (
							<div key={index} className='text-center'>
								<h3 className='text-lg font-medium uppercase tracking-wide mb-3 text-[var(--texas-brown)]'>
									{value.title}
								</h3>
								<p className='text-[var(--texas-leather)]'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className='py-16 bg-white text-[var(--texas-brown)]'>
				<div className='container mx-auto px-4 max-w-xl text-center'>
					<h2 className='text-2xl font-light uppercase tracking-wide mb-4 text-[var(--texas-brown)]'>
						Stay Connected
					</h2>
					<p className='text-[var(--texas-leather)] mb-8'>
						Sign up to receive a monthly email with exclusive offers and a look
						at new merchandise.
					</p>
					<form className='flex flex-col sm:flex-row gap-3'>
						<input
							type='email'
							placeholder='Your email address'
							className='flex-grow px-4 py-3 border border-[var(--texas-tan)] focus:outline-none focus:ring-1 focus:ring-[var(--texas-brown)]'
							required
						/>
						<button
							type='submit'
							className='bg-[#44c0c5] text-white px-6 py-3 font-medium tracking-wide hover:bg-[#3aa9ae] transition-colors'>
							SUBSCRIBE
						</button>
					</form>
					<p className='text-[var(--texas-leather)] mt-3 text-sm'>
						We respect your privacy.
					</p>
				</div>
			</section>

			{/* Service Promise */}
			<section className='py-16 bg-white bg-opacity-5'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								title: 'Free Delivery',
								description: 'On orders over $1,500 within our service areas',
							},
							{
								title: 'Expert Design Help',
								description: 'Complimentary design services at our stores',
							},
							{
								title: 'Quality Guarantee',
								description:
									'All our furniture is built to last for generations',
							},
							{
								title: 'Texas Craftsmanship',
								description:
									'Supporting local artisans and traditional techniques',
							},
						].map((service, index) => (
							<div key={index}>
								<h3 className='text-lg font-medium uppercase tracking-wide mb-2 text-[var(--texas-brown)]'>
									{service.title}
								</h3>
								<p className='text-[var(--texas-leather)]'>
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
