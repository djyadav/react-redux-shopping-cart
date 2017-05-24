import React from 'react';
export const DiscountTag = (props) => {
	if(!props.value || props.value==0) return null
	return(
		<div className="discount-tag">{props.value}% OFF</div>
	)
};
