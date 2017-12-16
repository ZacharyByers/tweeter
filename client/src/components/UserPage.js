import React from 'react'
import { connect } from 'react-redux'

class UserPage extends React.Component {
  render() {
    return(
      <div>User Page</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const user = state.users.find( u => u.id == props.match.params.id)
  return { user }
}

export default connect(mapStateToProps)(UserPage)
