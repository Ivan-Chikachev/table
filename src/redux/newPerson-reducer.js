let initialState = {
	newCurrentPerson: { id: '', firstName: '', lastName: '', email: '', phone: '', address: {city: ''}}
};

const SET_NEW_PERSON = 'SET_NEW_PERSON';

const newPersonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEW_PERSON:
			return {
				...state,
				newCurrentPerson: {
					id: action.id,
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
					phone: action.phone,
					address: ''
				}
			};
		default:
			return state;
	}
};

export const setNewPerson = (id, firstName, lastName, email, phone) => ({
	type: SET_NEW_PERSON,
	id,
	firstName,
	lastName,
	email,
	phone
});

export default newPersonReducer;
