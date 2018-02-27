const initialView = {
    homePage:'showGuidelinesList',
    surveyToRenderUrl:'',
    other: 'page'
};

export default (state = initialView, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'UPDATE_CURRENT_VIEW':
            Object.entries(action.updatedViewState).forEach((data) => {
                newState[data[0]] = data[1];
            })
            return newState;
        case 'RENDER_SURVEY':
            newState.surveyToRenderUrl = action.url;
            newState.surveyToRenderName = action.name;
            newState.surveyToRenderDescription = action.description;
            return newState
      default:
        return state;
    }
};
