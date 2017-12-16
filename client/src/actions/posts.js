import axios from 'axios';
import { setHeaders } from './headers';

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
    axios.post(`/api/users/${userId}/posts`, {content: post} )
      .then ( res => {
        dispatch(setHeaders(res.headers)),
        dispatch({ type: "NEW_POST", post: res.data })
      })
      .catch( err => console.log(err))
  }
}

export const updatePost = (userId, post) => {
  return ( dispatch ) => {
    axios.put(`/api/users/${userId}/posts/${post.id}`, { post })
      .then( res => dispatch({ type: "UPDATE_POST", post: res.data }) )
      .catch( err => console.log( err ))
  }
}

export const deletePost = (userId, post) => {
  return ( dispatch ) => {
    axios.delete(`/api/users/${userId}/posts/${post.id}`, { post })
      .then( res => dispatch({ type: "DELETE_POST", post: res.data }) )
      .catch( err => console.log( err ))
  }
}