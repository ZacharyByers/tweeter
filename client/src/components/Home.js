import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react';
import { getUsers } from '../actions/users'

class Home extends Component {

  state = { users: [] }

  componentDidMount() {
    this.props.dispatch( getUsers() )

  }

  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Home);
