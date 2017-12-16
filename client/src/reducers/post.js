const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'SHOW_POST':
      return action.post;
    case 'NEW_POST':
      return [ ...state, action.post ]
    case 'UPDATE_POST':
      return [ ...state, action.post ]
    case 'DELETE_POST':
      return state
    default:
      return state;
  }
};

export default posts;
