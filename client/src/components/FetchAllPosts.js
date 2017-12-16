import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './Home'
import UserPage from './UserPage'
import { Card, Loader, Segment, Dimmer, Header } from 'semantic-ui-react'
import { getPosts } from '../actions/posts'
import PostForm from './PostForm'
import { Link } from 'react-router-dom'

class FetchAllUsers extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const { id } = this.props.match.params
    dispatch( getPosts(id) )
  }

  displayPosts = () => {
    const { posts, user } = this.props
    if(user){
      if(posts.length > 0) {
        return posts.map( (post, i) =>
          <Card key={i}>
            { i + 1 }: {" "}
            <Link to={`/users/${user.id}/posts/${post.id}`}>{ post.content }</Link>
          </Card>
        )
      }
      return<Header as='h3'>{`This user doesn't have any posts yet.`}</Header>
    } else {
        return(
          <Dimmer>
            <Loader>Loading User</Loader>
          </Dimmer>
        )
      }
  }

  render() {
    const { user } = this.props
    let email = user ? user.email : ''
    return(
      <Segment basic>
        <Header as='h1'>{`${email}'s Posts`}</Header><br/>
        { this.displayPosts() }
      </Segment>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  const { id } = props.match.params
  const user = state.users.find( u => u.id == id)
  return { user, posts: state.post }
}

export default connect(mapStateToProps)(FetchAllUsers)
