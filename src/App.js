import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import ShopPage from './components/Shop/Shop';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';


function App() {
  return (
    <div>   
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />              
        <Route path='/shop' component={ShopPage}/>
      </Switch> 
    </div>
  );
}

export default App;
