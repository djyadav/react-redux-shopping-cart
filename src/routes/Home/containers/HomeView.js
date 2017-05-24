import { connect } from 'react-redux';
import { add as addToCart, remove as removeFromCart } from '../../Cart/modules/cart';

import ProductView from './../components/ProductView';

const mapDispatchToProps = {
  addToCart,
  removeFromCart
};

const mapStateToProps = (state) => ({
 cart:state.home.cart
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
