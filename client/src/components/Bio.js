import React from 'react'
import axios from 'axios'
import { Image, Segment } from 'semantic-ui-react'

class Bio extends React.Component {
  state = { profile_image: '', description: '' }

  componentDidMount() {
    const id = this.props.userId
    axios.get(`/api/users/${id}/bio`)
      .then( res => {
        const { profile_image, description } = res.data
        this.setState({ profile_image, description })
      })
      .catch( err => console.log(err) )
  }

  render() {
    const { profile_image, description } = this.state
    return(
      <Segment basic>
        <Image src={profile_image} size='medium' />
        <Segment basic>{description}</Segment>
      </Segment>
    )
  }
}

export default Bio
