import React from 'react'
import './product.css'
// interface Iproduct {
//     id: string,
//     title: number,
//     price: string,
//     category: string,
//     image: string
// }
const Product: React.FC = ({ id, title, price, category, description, image }): React.ReactElement => {
	return (
		<div className="produtMini">
			<img className="productImage" src={image} />
			<h4>{title}</h4>
			<h4>{price}</h4>
			<button>Buy Now</button>
		</div>
	)
}

export default Product

// id:30,
// title:'...',
// price:'...',
// category:'...',
// description:'...',
// image:'...'