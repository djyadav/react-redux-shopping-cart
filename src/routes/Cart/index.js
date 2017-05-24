

import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : '/cart',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CartView = require('./containers/CartView').default
      const reducer = require('./modules/cart').default

      injectReducer(store, { key: 'home', reducer })

      /*  Return getComponent   */
      cb(null, CartView)

    /* Webpack named bundle   */
    }, 'cart')
  }
});
