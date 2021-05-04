import { SHOW_MODAL_LOGIN, HIDE_MODAL, SHOW_MODAL_SIGNUP, SET_USER, GET_TOKEN } from '../actions/actionTypes';

const initialState = {
	show: false,
	loginPage: true,
	user : null,
	authenticated : false,
	accessToken : null
};


const authModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL_LOGIN:
			return {
				...state,
				show: true,
				loginPage: true,
			};
		case HIDE_MODAL:
			return {
				...state,
				show: false,
			};
		case SHOW_MODAL_SIGNUP:
			return {
				...state,
				show: true,
				loginPage: false,
			};
			case SET_USER:
				return {
					...state,
					user: action.payload,
					authenticated : true
				};
					
				case GET_TOKEN : 
				return {
					...state,
					authenticated: true
				}
		default:
			return state;
	}
};

export default authModalReducer;
