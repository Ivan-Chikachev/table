let initialState = {
	persons: [],
	directionSort: true,
	isFetching: false,
	field: null,
	currentPerson: { id: null, firstName: '', address: {} },
	isLoadUrl: false
};

const SET_PERSONS = 'SET_PERSONS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SORT_DATA = 'SORT_DATA';
const DIRECTION_SORT = 'DIRECTION_SORT';
const SET_FIELD = 'SET_FIELD';
const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';
const LOAD_URL = 'LOAD_URL';
const PUSH_PERSON = 'PUSH_PERSON';

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PERSONS:
			return { ...state, persons: action.persons };
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case SORT_DATA:
			return { ...state, persons: action.persons };
		case DIRECTION_SORT:
			return { ...state, directionSort: action.isDir };
		case SET_FIELD:
			return { ...state, field: action.field };
		case SET_CURRENT_PERSON:
			return { ...state, currentPerson: action.person };
		case LOAD_URL:
			return { ...state, isLoadUrl: action.load };
		case PUSH_PERSON:
			return { ...state, persons: [action.person, ...state.persons] };
		default:
			return state;
	}
};

export const setPersons = (persons) => ({ type: SET_PERSONS, persons });
export const setDirectionSort = (isDir) => ({ type: DIRECTION_SORT, isDir });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const sortData = (persons) => ({ type: SORT_DATA, persons });
export const setField = (field) => ({ type: SET_FIELD, field });
export const setCurrentPerson = (person) => ({ type: SET_CURRENT_PERSON, person });
export const loadUrl = (load) => ({ type: LOAD_URL, load });
export const pushPerson = (person) => ({ type: PUSH_PERSON, person });

export default tableReducer;
