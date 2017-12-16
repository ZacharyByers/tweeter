import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import { newPost } from '../actions/posts'
import { connect } from 'react-redux'

class PostForm extends React.Component {

  state = { content: "" }

  handleSubmit = (e) => {
    if( this.state.content ) {
      const { user, dispatch } = this.props
      const post = this.state.content
      dispatch( newPost( user.id, post ) )
      this.setState({ content: "" })
    }
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value })
  }

  render() {
    return(
      <Form>
        <Input label="New tweet" value={ this.state.content }
          onChange={ this.handleChange } placeholder="Say something..."
        /><br/>
        <Button.Group size="mini">
          <Button onClick={() => this.setState({ content: "" }) }>Cancel</Button>
          <Button primary onClick={() => this.handleSubmit() }>Post</Button>
        </Button.Group>
      </Form>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(PostForm)