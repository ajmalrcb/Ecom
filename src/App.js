import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import UserRegistration from './components/UserRegistration';
import Header from './components/Header';
import Product from './components/Product';
import { connect } from 'react-redux'
import Login from './components/Login';

const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header></Header>
        <Route path="/" component={Product} exact></Route>
        <Route component={UserRegistration} path="/new" ></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </Router>
  );
}

export default connect()(App);
