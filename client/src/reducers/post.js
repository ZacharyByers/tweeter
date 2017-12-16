const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'SHOW_POST':
      return action.post;
    case 'NEW_POST':
      return [ action.post, ...state ]
    case 'UPDATE_POST':
      console.log("hit update")
      return [ ...state, action.post ]
    case 'DELETE_POST':
      return state.filter( p => p.id !== action.id )
    default:
      return state;
  }
};

export default posts;
