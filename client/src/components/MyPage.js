import React, { Component } from 'react';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UserPage from './UserPage'
import Accept from './Accept'
import axios from 'axios'

class MyPage extends Component {

  isEditing = () => {
    const { id } = this.props.user
    if (this.state.editing) {
      this.getBio()
      return (
        <Segment basic compact align='center'>
          <Form onSubmit={this.handleSubmit}>
            <Accept />
            <Form.Input
              label='Profile Image'
              name='profile_image'
              value={this.state.profile_image}
              onChange={this.handleChange}
            />
            <Form.TextArea
              label='description'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Button positive type='submit'>Save Changes</Button>
            <Button onClick={ () => this.setState({editing: false}) }>Cancel</Button>
          </Form>
        </Segment>
      )
    }
  }


    )
  }

}




export default MyPage;
