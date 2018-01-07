const userData = {};

export const accountsReducer = (state = userData, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return action.userData;
      default:
        return state;
    }
};