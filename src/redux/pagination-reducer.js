let initialState = {
	totalPersonsCount: 0,
	pageSize: 50,
	totalPage: 0,
	currentPage: 1,
	currentBlock: []
};

const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PERSONS_COUNT = 'SET_TOTAL_PERSONS_COUNT';
const SET_CURRENT_BLOCK = 'SET_CURRENT_BLOCK';

const paginationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOTAL_PAGE:
			return { ...state, totalPage: action.totalPage };
		case SET_TOTAL_PERSONS_COUNT:
			return { ...state, totalPersonsCount: action.total };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page };
		case SET_CURRENT_BLOCK:
			return { ...state, currentBlock: action.block };
		default:
			return state;
	}
};

export const setTotalPage = (totalPage) => ({ type: SET_TOTAL_PAGE, totalPage });
export const setTotalPersonsCount = (total) => ({ type: SET_TOTAL_PERSONS_COUNT, total });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setCurrentBlock = (block) => ({ type: SET_CURRENT_BLOCK, block });

export default paginationReducer;
