import React from 'react';

import ParagraphTitle from '../Typography/ParagraphTitle';
import SubTitle from '../Typography/SubTitle';

const products = [
	{
		id: 1,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$13',
		description: '3 sizes available',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
		imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 2,
		name: 'Focus Card Holder',
		href: '#',
		price: '$64',
		description: 'Walnut',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
		imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
	},
	{
		id: 3,
		name: 'Focus Carry Case',
		href: '#',
		price: '$32',
		description: 'Heather Gray',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
		imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
	},
	{
		id: 4,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$13',
		description: '3 sizes available',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
		imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 5,
		name: 'Focus Card Holder',
		href: '#',
		price: '$64',
		description: 'Walnut',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
		imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
	},
	{
		id: 6,
		name: 'Focus Carry Case',
		href: '#',
		price: '$32',
		description: 'Heather Gray',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
		imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
	},
];

const ProductGrid = () => {
	return (
		<div className="bg-orange-200">
			<div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 id="products-heading" className="sr-only">
					Products
				</h2>
				<div className="mx-auto max-w-3xl pb-5 text-center">
					<SubTitle title="Browse my many wares..." />
				</div>

				<div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{products.map(product => (
						<a key={product.id} href={product.href} className="group">
							<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<div className="flex items-center justify-between">
								<ParagraphTitle title={product.name} />
							</div>
							<p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
