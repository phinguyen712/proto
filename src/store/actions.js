export default {
	updateUserObject(userData) {
		return {
			type: 'UPDATE_USER_OBJECT',
			userData
		};
	},
	logOutUser() {
		return {
			type: 'LOGOUT_USER'
		}
  	},
	updateCurrentView(updatedViewState) {
		return {
			type: 'UPDATE_CURRENT_VIEW',
			updatedViewState
		};
	},
	retrieveGuidelines(guidelines) {
		return {
			type: 'RETRIEVE_GUIDELINES',
			guidelines
		}
	},
	addGuideline(guideline) {
		return {
			type: 'ADD_GUIDELINE',
			guideline
		}
	},
	renderSurvey(url) {
		return {
			type: 'RENDER_SURVEY',
			url
		}
  	}
};