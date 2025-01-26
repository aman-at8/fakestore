import React, { useEffect, useState } from 'react'
import './productDetails.css'
import { useParams } from 'react-router'

const ProductDetails = () => {
	const [product, setProductDetails] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`).then(data => {
			return data.json()
		}).then(response => {
			console.log("response::", response)
			setProductDetails(response)
		})
	}, [])
	if (!product) {
		return (
			<div>Loading Product Details.......</div>
		)
	}
	return (
		<div className='productDetails'>
			<h4>{product.title}</h4>
			<div className='description'>
				<img className='productImage' src={product.image}></img>
				<p className='productDescription'>{product.description}</p>
			</div>
			<div>
				<h4 className='price'>{product.price}</h4>
			</div>
		</ div>
	)
}

export default ProductDetails

// id:30,
// title:'...',
// price:'...',
// category:'...',
// description:'...',
// image:'...'