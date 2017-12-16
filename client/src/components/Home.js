import React, { Component } from 'react';
import { Header, Segment, Image, Icon, Feed } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'

class Home extends Component {

  state = { users: [] }

  componentDidMount() {
    this.props.dispatch( getUsers() )

  }

  render() {
    return (
      
      <Segment>
      <Header color='blue' as='h1' textAlign='center'>Tweeter</Header>
      <div>
    <Header as='h2' icon textAlign='center'>
      <Icon color='blue' name='feed' circular />
      <Header.Content color='blue'>
        
      </Header.Content>
    </Header>
    <Image centered size='large' src='/assets/images/wireframe/centered-paragraph.png' />
    <Feed Align='center'>
    <Feed.Event>
      <Feed.Label>
        <img src='/assets/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Chris L.</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/assets/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Zach B.</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a><img src='/assets/images/wireframe/image.png' /></a>
          <a><img src='/assets/images/wireframe/image.png' /></a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary date='2 Days Ago' user='MA' content=' add you as a friend' />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/assets/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Josh M.</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
          over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
          day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='/assets/images/avatar/small/justen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Aaron W. </a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a><img src='/assets/images/wireframe/image.png' /></a>
          <a><img src='/assets/images/wireframe/image.png' /></a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
      </div>
      </Segment>

      
    );
  }
  
}

const mapStateToProps = ( state ) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Home);
