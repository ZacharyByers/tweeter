import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header textAlign='center'>
        <br/><h1>Whoops!</h1>
        <h3>The page you are looking for doesn't appear to exist in the site directory.</h3>
        <h3>We're not sure where you wanted to go, but you're free to keep trying to get there if you like.</h3>
        <h4>We won't stop you.</h4>
      </Header>
    );
  }
}

export default NoMatch;
