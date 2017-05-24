import React from 'react';
export default (props) => {
	function  removeFromCart(e) {
		var id=e.target.parentNode.parentNode.dataset.id;
		props.removeFromCart(id)
	};
	function increaseQuantity(e){
		var id=e.target.parentNode.parentNode.dataset.id;
		props.increaseQuantity(id)
	};
	function decreaseQuantity(e){
		var id=e.target.parentNode.parentNode.dataset.id;
		props.decreaseQuantity(id);
	};

	var Products= props.products.map((product)=>{
	 	return (
	 		<div className="cart-item grid" data-id={product.id}>
	 			<div className="name grid-item grid-item-4">
	 				<span>{product.name}</span>
	 				<button onClick={removeFromCart}>X</button>
	 			</div>
	 			<div className="quantity grid-item grid-item-4">
					<button  onClick={decreaseQuantity}>-</button>
		 			<span>{product.quantity}</span>
	 				<button  onClick={increaseQuantity}>+</button>
	 			</div>
	 			
	 			<span className="grid-item grid-item-4 price">{product.price*product.quantity} </span>
	 			
	 		</div>
	 		)
	 });
	
	 return( 
	   	<div>
			{Products}	 		
	  	</div>
	  )
}