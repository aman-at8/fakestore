import React, { useEffect, useState } from 'react'
import Product from '../product/product';
import './products.css'

const getProducts = async () => {
	const res = await fetch("https://fakestoreapi.com/products/")
	const data = await res.json();
	return data
}

const ProductList: React.FC = (): React.ReactElement => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		getProducts().then(data => {
			setProducts(data);
			console.log("data", data)
		}).catch(error => {
			console.log(error)
		});
	}, []);

	return (
		<>
			<div className='products'>
				{
					products.map((prdct, index) => {
						return <Product key={index}{...prdct} />
					})
				}
			</div>
		</>
	)
}

export default ProductList