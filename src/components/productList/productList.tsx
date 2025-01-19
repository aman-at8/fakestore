import React, { useEffect, useState } from 'react'


const getProducts = async () => {
	const res = await fetch("https://fakestoreapi.com/products/")
	const data = await res.json();
	return data
}

const ProductList = () => {
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
			<div>product List</div>
			{products && <ul>
				{products.map((product, index) => {
					return <li key={index}>
						{product.title}
					</li>
				})}
			</ul>}
		</>
	)
}

export default ProductList