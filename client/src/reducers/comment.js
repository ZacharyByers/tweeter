const comments = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      return action.comments;
    case 'NEW_COMMENT':
      return [ ...state, action.comment ]
    default:
      return state;
  }
};

export default comments;
