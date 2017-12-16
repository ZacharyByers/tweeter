import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './Home'
import UserPage from './UserPage'
import { Card, Loader, Segment, Dimmer } from 'semantic-ui-react'
import { getPosts } from '../actions/posts'

class FetchAllUsers extends React.Component {

  componentDidMount() {
    const { dispatch, user } = this.props
    dispatch( getPosts(user.id) )
  }

  displayPosts = () => {
    const { posts } = this.props
    return posts.map( (post, i) => 
      <Card key={i}>
        { i + 1 }: {" "}
        { post.content }
      </Card>
    )
  }

  render() {
    const { user } = this.props
    return(
      <Segment basic>
        <h1>All posts:</h1><br/>
        { this.displayPosts() }
      </Segment>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { user: state.user, posts: state.post }
}

export default connect(mapStateToProps)(FetchAllUsers)
