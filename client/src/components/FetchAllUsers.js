import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './Home'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'

class FetchAllUsers extends React.Component {
  render() {
    return(
      <Segment basic>
        <Route exact path='/' component={Home} />
      </Segment>
    )
  }
}

export default connect()(FetchAllUsers)
