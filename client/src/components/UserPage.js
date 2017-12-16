import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Bio from './Bio'


const UserPage = ({ user }) => {
  if(user)
    return(
      <Segment basic align='center'>
        <Header as='h2'>{user.email}</Header>
        <Bio userId={user.id} />
        <Link to={`/users/${user.id}/posts`}>{`${user.email}'s Posts`}</Link>
      </Segment>
    )
  else
    return(
      <Dimmer>
        <Loader>Loading User</Loader>
      </Dimmer>
    )
}

const mapStateToProps = (state, props) => {
  const user = state.users.find( u => u.id == props.match.params.id)
  return { user }
}

export default connect(mapStateToProps)(UserPage)
