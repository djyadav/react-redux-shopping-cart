import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import IndexRoute from './Home';
import CartRoute from './Cart';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : IndexRoute(store),
  childRoutes : [
    CartRoute(store)
  ]
});

export default createRoutes;
