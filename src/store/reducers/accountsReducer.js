const userData = {};

export default (state = userData, action) => {
    switch (action.type) {
      case 'UPDATE_USER_OBJECT':
        return action.userData;
      case 'LOGOUT_USER':
        return {};
      default:
        return state;
    }
};