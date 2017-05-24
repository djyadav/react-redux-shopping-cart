import React from 'react';
export default (props) => {
	 var total=props.products.reduce((total,product)=>{
	 	total.quantity=total.quantity+product.quantity;
	 	total.price=total.price + (product.price * product.quantity);
	 	total.discount=total.discount + (product.discount/100) * (product.price*product.quantity);
	 	if(product.type='fiction'){
	 		total.typeDiscount=total.typeDiscount + ((15/100) * (product.price*product.quantity));
	 	}
	 	return Object.assign({},total);
	 },{
	 	quantity:0,
	 	price:0,
	 	discount:0,
	 	typeDiscount:0
	 });
	 return( 
	    <div className="grid-item grid-item-3" id="cart-total">
	   		<h4>Total</h4>
	   		<div className="grid">
	   			<div className="grid-item grid-item-9">
	   				Items({total.quantity}):
	   			</div>
	   			<div className="grid-item grid-item-3">
	   				{total.price}
	   			</div>
	   		</div>
	   		<div className="grid">
	   			<div className="grid-item grid-item-9">
	   				Discount:
	   			</div>
	   			<div className="grid-item grid-item-3">
	   				{total.discount}
	   			</div>
	   		</div>
	   		<div className="grid">
	   			<div className="grid-item grid-item-9">
	   				Type Discount:
	   			</div>
	   			<div className="grid-item grid-item-3">
	   				{total.typeDiscount}
	   			</div>
	   		</div>
	   		<div className="grid " id="bottom-row">
	   			<div className="grid-item grid-item-9">
	   				Total:
	   			</div>
	   			<div className="grid-item grid-item-3">
	   				{total.price - total.discount - total.typeDiscount}
	   			</div>
	   		</div>

	    </div>		 		
	 );
};
