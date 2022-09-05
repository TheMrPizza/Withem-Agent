import { createStore } from 'redux';

const ACTIONS = {
	ADD_PERSONAL_INFO: 'ADD_PERSONAL_INFO',
	ADD_CONTACTS: 'ADD_CONTACTS'
};

const userDetailsReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_PERSONAL_INFO: {
			return {...state, ...action.payload};
		}
		case ACTIONS.ADD_CONTACTS: {
			return {...state, contacts: action.payload};
		}
		default: {
			return state;
		}
	}
};

const store = createStore(userDetailsReducer);

export default store;

export {
	ACTIONS
};