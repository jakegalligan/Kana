import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import './index.css';
import App from './App';
import LandingPage from './components/shared/LandingPage'
import Menu from './components/customer/DrinkMenu'
import OrderReview from './components/customer/OrderReview'
import OrderCompleted from './components/customer/OrderCompleted'
import LoginPage from './components/admin/LoginPage'
import Orders from './components/admin/OrderBacklog'
import Stats from './components/admin/Stats'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const store = createStore(
    rootReducer, {}, applyMiddleware(thunk),
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/customer/menu' component={Menu} />
                    <Route exact path='/customer/review' component={OrderReview} />
                    <Route exact path='/customer/complete' component={OrderCompleted} />
                    <Route exact path='/admin/login' component={LoginPage} />
                    <Route exact path='/admin/orders' component={Orders} />
                    <Route exact path='/admin/stats' component={Stats} />
                </Switch>
            </App>
        </Router>,
    </Provider>,
    document.getElementById('root'));
