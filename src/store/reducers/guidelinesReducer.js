export default (state = [], action) => {
	switch (action.type) {
		case 'RETRIEVE_GUIDELINES':
			return action.guidelines
		default:
			return state;
    }
    switch (action.type) {
		case 'ADD_GUIDELINE':
			return [action.guideline,...action]
		default:
			return state;
    }
};