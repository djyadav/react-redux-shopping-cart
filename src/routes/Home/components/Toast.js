import React from 'react';
export default (props) => {
	if(!props.product) return null
	return(
		<div className="toast">{props.product.name} added to cart</div>
	)
};