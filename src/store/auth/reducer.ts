import {
    POST_AUTH_FAILURE,
    POST_AUTH_STARTED,
    POST_AUTH_SUCCES,
} from './actionTypes';

const initialState = {
    isAuth: false,
    error: null,
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case POST_AUTH_STARTED: {
            return {
                ...state,
            };
        }
        case POST_AUTH_SUCCES: {
            return {
                ...state,
                isAuth: true,
            };
        }
        case POST_AUTH_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default:
            return state;
    }
}
