import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import SubTitle from '../typography/SubTitle';

interface ProductTypes {
	title: string;
	contentful_id: string;
	url: string;
	productImage: {
		gatsbyImageData: IGatsbyImageData;
	};
}

const StoreContent = () => {
	const data = useStaticQuery(query);
	const products = data.allContentfulStoreGallery.nodes;

	console.log(products);

	return (
		<div className="bg-primary">
			<div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className=" grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
					{products.map((product: ProductTypes) => (
						<Link to={product.url} key={product.contentful_id} className="group">
							<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm xl:aspect-w-7 xl:aspect-h-8">
								<GatsbyImage
									image={product.productImage.gatsbyImageData}
									alt={product.title}
									className="h-full w-full object-cover object-center "
								/>
							</div>
							<div className="mt-3">
								<SubTitle title={product.title} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoreContent;

const query = graphql`
	{
		allContentfulStoreGallery {
			nodes {
				title
				contentful_id
				url
				productImage {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
