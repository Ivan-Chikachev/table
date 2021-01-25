let initialState = {
	searchText: '',
	newText: '',
	filtredData: []
};

const SEND_TEXT = 'SEND-TEXT';
const SEND_SEARCH_TEXT = 'SEND_SEARCH_TEXT';
const SET_FILTRED = 'SET_FILTRED';

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_TEXT:
			return { ...state, newText: action.text };
		case SEND_SEARCH_TEXT:
			return { ...state, searchText: state.newText };
		case SET_FILTRED:
				return { ...state, filtredData: action.persons };
		default:
			return state;
	}
};

export const sendSearchText = (text) => ({ type: SEND_SEARCH_TEXT, text });
export const updateText = (text) => ({ type: SEND_TEXT, text });
export const setFiltred = (persons) => ({ type: SET_FILTRED, persons });

export default searchReducer;
