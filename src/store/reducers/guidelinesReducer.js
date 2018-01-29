export default (state = [], action) => {
	switch (action.type) {
		case 'RETRIEVE_GUIDELINES':
			return action.guidelines;
		case 'ADD_GUIDELINE':
			return [...state, action.guideline];
		default:
			return state;
    }
};