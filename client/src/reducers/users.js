const users = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.users;
    case 'SHOW_USER':
      return action.user;
    default:
      return state;
  }
};

export default users;
