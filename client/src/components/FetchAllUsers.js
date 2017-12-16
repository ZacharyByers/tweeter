import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './Home'
import UserPage from './UserPage'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'
import { getUsers } from '../actions/users'

class FetchAllUsers extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    return(
      <Segment basic>
        <Route exact path='/users' component={Home} />
        <Route exact path='/users/:id' component={UserPage} />
      </Segment>
    )
  }
}

export default connect()(FetchAllUsers)
