import React from 'react';
import {DiscountTag} from './DiscountTag';
export default (props) => {
function  addToCart(e) {
	props.addToCart(e.target.dataset.id)
}
 var Products= props.products.map((product)=>{
 	return (
 		<div className="product grid-item grid-item-3">
 			<div className="image" >
 				<DiscountTag value={product.discount} />
 				<img src={product.img_url} className="img-responsive"/>
 			</div>
 			<div className="caption">
 				<h5>{product.name}</h5>
 				<h4>${product.price}</h4>
 				<button data-id={product.id} onClick={addToCart}>Add to cart</button>
 			</div>
 			
 			
 		</div>
 		)
 })
 return( <div className="grid">
    {Products}
  </div>
  )
}