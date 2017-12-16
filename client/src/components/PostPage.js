import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/posts'
import { Button, Container, Segment } from 'semantic-ui-react'

class PostPage extends React.Component {

  destroyPost = () => {
    const { post, dispatch, userId } = this.props    
    dispatch( deletePost(userId, post))
  }

  render() {
    const { post } = this.props
    if(post)
      return(
        <Container>
          <Segment textAlign="center">
            { post.content }<br/>
          </Segment>
            <Button size="mini" color="red" 
              onClick={() => this.destroyPost()}>Delete
            </Button>
        </Container>
      )
    else
      return null
  }
}

const mapStateToProps = (state, props) => {
  const post = state.post.find( p => p.id == props.match.params.id)
  const userId = state.user.id
  return { post, userId }
}

export default connect(mapStateToProps)(PostPage)
