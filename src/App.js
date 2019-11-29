import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import ShopPage from './components/Shop/Shop';
import HomePage from './pages/Home/Home';


function App() {
  return (
    <div>   
      <Switch>
        <Route exact path='/' component={ HomePage } />              
        <Route path='/shop' component={ShopPage}/>
      </Switch> 
    </div>
  );
}

export default App;
