import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Add from './components/AddForm'
import Detail from './components/DetailProduct'
import List from './components/ListPage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' components={List}></Route>
            <Route exact path='/AddForm' components={Add}></Route>
            <Route exact path='/DetailProduct' components={Detail}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App;
