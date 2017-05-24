import React from 'react';
import './ProductView.scss';
import { default as DATA }  from './../../../data.js';
import  Products from './Products';
import { Link } from 'react-router';
import Toast from './Toast';
export const ProductView =  React.createClass({ 
	getInitialState(){
		return {
			cart:this.props.cart.slice(),
			toast:false,
			recent:null
		}
	},
	componentWillReceiveProps(props){
		let toast=false;
		this.setState({
			cart:props.cart.slice(),
			toast:this.isAdded(props.cart,this.state.recent)
		});
	},
	componentDidUpdate(){
		if(this.state.recent){
			setTimeout(()=>{
				this.setState({
					recent:null,
					toast:false
				})
			},3000)
		}
	},
	isAdded(cart,id){
		for(var i=0;i<cart.length;i++){
			if(cart[i].id==id){
				return true;
			}
		}
		return false;
	},
	addToCart(id){
		this.props.addToCart(id)
		this.setState({
			recent:id
		})	
	},
	render(){
		var product=null;
		if(this.state.recent){
			for(var i=0;i<DATA.length;i++){
				if(DATA[i].id==this.state.recent){
					product=DATA[i]
				}
			}
		}
	    return (
	  	<div>
		  	<Toast trigger={false} product={product}/>
		  	<header>
			  	<strong>All Items</strong>
			  	<Link className={this.state.cart.length>0 ? 'pull-right' : 'pull-right hidden'} id="cart-link" to='/cart'>Goto cart <span className="count">{this.state.cart.length}</span></Link>
		  	</header>
		    <Products addToCart={this.addToCart} products={DATA}/>
	  </div>)
	}
});

export default ProductView;
