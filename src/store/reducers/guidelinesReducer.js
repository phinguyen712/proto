export default (state = [], action) => {
	switch (action.type) {
		case 'RETRIEVE_GUIDELINES':
			return action.guidelines;
		case 'ADD_GUIDELINE':
			return [action.guideline,...action];
		default:
			return state;
    }
};