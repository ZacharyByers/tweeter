import axios from 'axios';

export const getPosts = (userId) => {
  return ( dispatch ) => {
    axios.get(`/api/users/${userId}/posts`)
      .then( res => dispatch({ type: "GET_POSTS", posts: res.data }))
      .catch ( err => console.log(err) )
  }
}

export const showPost = (userId, postId) => {
  return ( dispatch ) => {
    axios.get(`/api/users/${userId}/posts/${postId}`)
      .then( res => dispatch({ type: "SHOW_POST", post: res.data }))
      .catch ( err => console.log(err) )
  }
}

export const newPost = (userId, post) => {
  return ( dispatch ) => {
    axios.post(`/api/users/${userId}/posts`, { ...post })
      .then ( res => {
        dispatch(setHeaders(res.headers))
        dispatch({ type: "NEW_POST", post: res.data})
      .catch( err => console.log(err))
      })
  }
}