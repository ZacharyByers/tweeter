import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Button color='blue'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          </Button>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
      <Button.Group compact color='blue'>
        <Button>
        <Link to='/register'>
          <Menu.Item name='edit'>
              <Icon name='edit' />
              Register
            </Menu.Item>
        </Link>
        </Button>
        <Button>
        <Link to='/login'>
          <Menu.Item name='unlock'>
              <Icon name='unlock' />
              Login
            </Menu.Item>
        </Link>
        </Button>
      </Button.Group>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        
        <Menu pointing secondary>
          <Button.Group compact color='blue'>
            <Button>
              <Link to='/'>
              <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
              </Link>
            </Button>
            <Button>  
              < Link to='/mypage'>
              <Menu.Item name='id badge'>
              <Icon name='id badge' />
              My Page
            </Menu.Item>
              </Link>
            </Button>
            <Button>  
              <Link to='mycomments'>
              <Menu.Item name='comment'>
              <Icon name='comment' />
              My Commments
            </Menu.Item>
              </Link>
            </Button>
            <Button>
              <Link to='/users'>
              <Menu.Item name='users'>
              <Icon name='users' />
              Users
              </Menu.Item>
              </Link>
            </Button>
          </Button.Group>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
