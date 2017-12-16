import axios from 'axios';

export const getComments = (postId) => {
  return ( dispatch ) => {
    axios.get(`/api/posts/${postId}/comments`)
      .then( res => dispatch({ type: "GET_COMMENTS", comments: res.data }))
      .catch ( err => console.log(err) )
  }
}

export const newComment = (postId, comment) => {
  return ( dispatch ) => {
    axios.post(`/api/posts/${postId}/comments`, { ...comment } )
      .then ( res => {
        dispatch(setHeaders(res.headers))
        dispatch({ type: "NEW_COMMENT", comment: res.data})
      .catch( err => console.log(err))

      })
  }
}
