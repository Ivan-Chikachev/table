let initialState = {
	searchText: '',
	filtredData: []
};

const SEND_SEARCH_TEXT = 'SEND_SEARCH_TEXT';
const SET_FILTRED = 'SET_FILTRED';

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_SEARCH_TEXT:
			return { ...state, searchText: action.text };
		case SET_FILTRED:
				return { ...state, filtredData: action.persons };
		default:
			return state;
	}
};

export const sendSearchText = (text) => ({ type: SEND_SEARCH_TEXT, text });
export const setFiltred = (persons) => ({ type: SET_FILTRED, persons });

export default searchReducer;
