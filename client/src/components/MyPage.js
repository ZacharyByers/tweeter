import React, { Component } from 'react';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UserPage from './UserPage'
import Accept from './Accept'
import axios from 'axios'

class MyPage extends Component {
  state = { editing: false, profile_image: '', description: '' }

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

  handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.user
    const { profile_image, description, noBio } = this.state
    const bio = { profile_image, description }
    if(noBio) {
      axios.post(`/api/users/${id}/bio`, { bio })
      .then( res => this.setState({ editing: false, profile_image: '', description: '', noBio: false }) )
      .catch( err => console.log(err))
    }
    else {
      axios.put(`/api/users/${id}/bio`, { bio })
        .then( res => this.setState({ editing: false, profile_image: '', description: ''}) )
        .catch( err => console.log(err))
    }
  }

  handleChange = (e, {name, value}) => this.setState({ [name]: value })

  getBio = () => {
    axios.get(`/api/users/${this.props.user.id}/bio`)
      .then( res => {
        const { profile_image, description } = res.data
        this.setState({ profile_image, description })
      })
      .catch( () => this.setState({ noBio: true }) )
  }

  render() {
    const { editing } = this.state
    if(!editing)
      return (
        <Segment basic align='center'>
          <Button primary onClick={ () => this.setState({ editing: true }) }>Edit Bio</Button>
          <UserPage />
        </Segment>
      )
    else
      return this.isEditing()
  }

}

const mapStateToProps = (state) =>{
  return { user: state.user }
}

export default connect(mapStateToProps)(MyPage);
