import React, { useState } from 'react'
import './product.css'
import { Navigate } from 'react-router'

const Product: React.FC = ({ id, title, price, category, description, image }): React.ReactElement => {
	const [buttonClicked, setButtonClicked] = useState(false)
	const handleClick = () => {
		setButtonClicked(true)
	}
	if (buttonClicked) {
		return (
			<Navigate to={`/products/${id}`} />
		)
	}
	else {
		return (
			<div className="produtMini">
				<img className="productImage" src={image} />
				<h4>{title}</h4>
				<h4>{price}</h4>
				<button className='button-product' onClick={handleClick}>Buy Now</button>
			</div>
		)
	}
}

export default Product

// interface Iproduct {
//     id: string,
//     title: number,
//     price: string,
//     category: string,
//     image: string
// }