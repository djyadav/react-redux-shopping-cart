

import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : '/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./containers/HomeView').default
      const reducer = require('./../Cart/modules/cart').default

      injectReducer(store, { key: 'home', reducer })

      cb(null, HomeView)

    /* Webpack named bundle   */
    }, 'home')
  }
});
