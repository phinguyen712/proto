const userData = {};

export default (state = userData, action) => {
    switch (action.type) {
      case 'UPDATE_USER_OBJECT':
        return action.userData;
      default:
        return state;
    }
};