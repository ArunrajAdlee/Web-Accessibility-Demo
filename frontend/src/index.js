import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/Misc/scrollToTop';
import DefaultLayout from './components/Layouts/defaultLayout';
import RouteWrapper from './components/Layouts/routeLayoutWrapper'
import Dashboard from './components/Dashboard/Dashboard'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Error404 from './components/Misc/404page';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <RouteWrapper path="/movie/:id" pageComponent={MovieDetail} layoutComponent={DefaultLayout} />
        <RouteWrapper path="/home" pageComponent={Dashboard} layoutComponent={DefaultLayout} />
        <RouteWrapper pageComponent={Error404} layoutComponent={DefaultLayout} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
