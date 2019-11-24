import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home/Home';

import './App.scss';

const Shop = (props) => {
  return (
    <div>
      <h1>Shop Page</h1>
      <div>{ props.location.pathname.split('/').pop().toUpperCase() }</div>
    </div>
  )
}

function App() {
  return (
    <div>    
        <Route exact path='/' component={ HomePage } />              
        <Route path='/shop' component={Shop}/>
    </div>
  );
}

export default App;
