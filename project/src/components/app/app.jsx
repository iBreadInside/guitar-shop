import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import Catalog from '../pages/catalog/catalog';
import NotFound from '../pages/not-found/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.CATALOG}
        >
          <Catalog />
        </Route>
        {/* <Route
          exact
          path={AppRoute.CART}
        >

        </Route> */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
