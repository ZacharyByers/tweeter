import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './Home'
import UserPage from './UserPage'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'
import { getUsers } from '../actions/users'
import FetchAllPosts from './FetchAllPosts';
import PostPage from './PostPage';

class FetchAllUsers extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    return(
      <Segment basic>
        <Route exact path='/users' component={Home} />
        <Route exact path='/users/:id' component={UserPage} />
        <Route exact path='/users/:id/posts' component={FetchAllPosts} />
        <Route exact path='/users/:id/posts/:id' component={PostPage} />
      </Segment>
    )
  }
}

export default connect()(FetchAllUsers)
