import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import ShopPage from './components/Shop/Shop';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';
import AuthPage from './pages/Auth/Auth';
import { auth } from './firebase/FirebaseUtils';


const App = () => {  

    const [state, setState] = useState({ currentUser: null });

    let unsubscribeFromAuth = useRef();

    useEffect(()=> {      
      unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
        setState({ currentUser: user });

        console.log(user);
      });

      return () => {
          unsubscribeFromAuth();
      }
    },[]);

    return (
      <div>
        <Header currentUser={ state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
      </div>
    );  
}

export default App;
