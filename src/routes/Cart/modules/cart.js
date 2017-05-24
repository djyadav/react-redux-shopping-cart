// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY='INCREASE_QUANTITY';
export const DECREASE_QUANTITY='DECREASE_QUANTITY';

// ------------------------------------
// Actions
// ------------------------------------
export function add (value) {
  return {
    type    : ADD_TO_CART,
    payload : value
  }
};
export function remove (value) {
  return {
    type    : REMOVE_FROM_CART,
    payload : value
  }
};

export function increaseQuantity (value) {
  return {
    type    : INCREASE_QUANTITY,
    payload : value
  }
};

export function decreaseQuantity (value) {
  return {
    type    : DECREASE_QUANTITY,
    payload : value
  }
};

export const actions = {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity
}

function findIndex(cart,id){
  for(var i=0;i<cart.length;i++){
    if(cart[i].id==id) return i;
  }
  return -1;
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TO_CART]    : (state, action) => {
    let new_state=Object.assign({},state)
    let cart=new_state.cart.slice();
    var index=findIndex(cart,action.payload);

    if(index>-1){
      cart[index]=Object.assign({},cart[index],{quantity:cart[index].quantity+1})
    }else{
      cart.push({id:action.payload,quantity:1});
    }
    new_state.cart=cart.slice();
    return new_state
  },
  [REMOVE_FROM_CART] : (state, action) => {
    let new_state=Object.assign({},state)
    let cart=new_state.cart.slice();
    let index=findIndex(cart,action.payload);
    if(index<0) return new_state;
    cart.splice(index,1);
    new_state.cart=cart.slice();
    return new_state
   },
  [INCREASE_QUANTITY]:(state,action)=>{
    let new_state=Object.assign({},state)
    let cart=new_state.cart.slice();
    let index=findIndex(cart,action.payload);
    if(index<0) return new_state;
    cart[index]=Object.assign({},cart[index],{quantity:cart[index].quantity+1});
    new_state.cart=cart.slice();
    return new_state;
  },
  [DECREASE_QUANTITY]:(state,action)=>{
    let new_state=Object.assign({},state)
    let cart=new_state.cart.slice();
    let index=findIndex(cart,action.payload);
    if(index<0) return new_state;
    let quantity=cart[index].quantity-1;
    if(quantity<1){
        cart.splice(index,1);
    }else{
      cart[index]=Object.assign({},cart[index],{quantity});
    }
    new_state.cart=cart.slice();
    return new_state;
   }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cart:[]
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
};
