import axios from 'axios';

export const getUsers = () => {
  return ( dispatch ) => {
    axios.get("api/users")
      .then( res => dispatch({ type: "GET_USERS", users: res.data }))
      .catch ( err => console.log(err) )
  }
}

export const showUser = () => {
  return ( dispatch ) => {
    axios.get("api/users/:id")
      .then( res => dispatch({ type: "SHOW_USER", user: res.data }))
      .catch ( err => console.log(err) )
  }
}