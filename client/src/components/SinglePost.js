import React from 'react'
import { connect } from 'react-redux'
import { showPost } from '../actions/posts'
import { Segment, Header, Dimmer, Loader } from 'semantic-ui-react'

class SinglePost extends React.Component {
  componentDidMount() {
    const { user_id, id } = this.props.match.params
    this.props.dispatch(showPost(user_id, id))
  }

  render() {
    const { post, user } = this.props
    if(user)
      return(
        <Segment basic align='center'>
          <Header as='h3'>{user.email} said:</Header>
          <Segment basic>{post.content}</Segment>
        </Segment>
      )
    else
      return(
        <Dimmer>
          <Loader>Loading User</Loader>
        </Dimmer>
      )
  }
}

const mapStateToProps = (state, props) => {
  const { user_id } = props.match.params
  const user = state.users.find( u => u.id == user_id)
  return { user, post: state.post }
}

export default connect(mapStateToProps)(SinglePost)
