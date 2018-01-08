export default {
  updateUserObject(userData){
    return {
      type: 'UPDATE_USER_OBJECT',
      userData
    };
  },
  updateCurrentView(updatedViewState){
    return {
      type: 'UPDATE_CURRENT_VIEW',
      updatedViewState
    };
  }
};