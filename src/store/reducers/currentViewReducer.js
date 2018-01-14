const initialView = {
    homePage:'showGuidelinesList',
    other: 'page'
};

export default (state = initialView, action) => {
    switch (action.type) {
      case 'UPDATE_CURRENT_VIEW':
        let newState = Object.assign({}, state);
        Object.entries(action.updatedViewState).forEach((data) => {
            newState[data[0]] = data[1];
        })
        return newState;
      default:
        return state;
    }
};
