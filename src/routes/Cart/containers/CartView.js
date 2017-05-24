import { connect } from 'react-redux';
import { add as addToCart, remove as removeFromCart,increaseQuantity , decreaseQuantity } from '../modules/cart';
import CartView from './../components/CartView';
const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
};

const mapStateToProps = (state) => ({
 cart:state.home.cart || []
});
export default connect(mapStateToProps, mapDispatchToProps)(CartView);
