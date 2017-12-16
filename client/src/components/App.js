import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import MyPage from './MyPage'
import MyComments from './MyComments'
import Footer from './Footer'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import FetchAllUsers from './FetchAllUsers'
import { Switch, Route } from 'react-router-dom';
import FetchAllPosts from './FetchAllPosts';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={FetchAllUsers} />
            <ProtectedRoute exact path='/mypage' component={MyPage} />
            <ProtectedRoute exact path='/mycomments' component={MyComments} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
