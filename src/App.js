import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/actions/userAction';
import './App.scss';
import ShopPage from './components/Shop/Shop';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';
import AuthPage from './pages/Auth/Auth';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';

class App extends Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' render={()=>this.props.currentUser ? (<Redirect to='/'/>):<AuthPage/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps,{setCurrentUser})(App);
