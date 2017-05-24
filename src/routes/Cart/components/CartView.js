import React from 'react';
import './CartView.scss';
import { default as DATA }  from './../../../data.js';
import  Products from './Products';
import {Link } from 'react-router';
import Total from './Total';
import { browserHistory } from 'react-router';

export const HomeView = React.createClass({
	getInitialState(){
		return {}
	},
	componentWillUpdate(props){
		if(!props.cart || props.cart.length<=0){
			browserHistory.push('/');
		}
	},
	componentWillMount(props){
		if(!this.props.cart || this.props.cart.length<=0){
			browserHistory.push('/');
		}
	},
	render(){
			var findProductData=(id)=>{
				for(var i=0;i<DATA.length;i++){
					if(DATA[i].id==parseInt(id)) return DATA[i];
				}
				return null;
			}
			var products=this.props.cart.map((product)=>{
				return Object.assign({},findProductData(product.id),product);
			});
			if(!products) products=[];
		  	return (<div id="checkout">
			  	<div className="grid">
			  		<h2 className="grid-item grid-item-9 page-heading" >Order Summary</h2>
			  	</div>
			  	<div className="grid">
				  	<div className="grid-item grid-item-9">
			 			<div className="cart-item cart-title grid " >
				 			<div className=" grid-item grid-item-4">
				 				Name
				 			</div>
				 			<div className=" grid-item grid-item-4">
								Quantity
				 			</div>
				 			
				 			<span className="grid-item grid-item-4">Price </span>
				 			
				 		</div>
			 			<Products addToCart={this.props.addToCart} 
			 					removeFromCart={this.props.removeFromCart}
			 					products={products} 
			 					increaseQuantity={this.props.increaseQuantity} 
			 					decreaseQuantity={this.props.decreaseQuantity}
			 			/>
				 	</div>
			 		
		  	 <Total products={products} />
		  </div>
		</div>
  )
}
});

export default HomeView;
