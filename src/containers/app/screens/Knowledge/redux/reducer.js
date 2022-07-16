import { combineReducers } from 'redux';
import { REQUEST_STATE } from 'app-configs';
import {
    GET_VACCINE_BY_ID,
    GET_VACCINE_BY_ID_SUCCESS,
    GET_VACCINE_BY_ID_FAIL,
    RESET_GET_VACCINE_BY_ID,
} from './action';

const defaultState = {
    state: null,
    data: null,
};

export default combineReducers({
    vaccine: (state = defaultState, action) => {
        switch (action.type) {
            case GET_VACCINE_BY_ID().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_VACCINE_BY_ID_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_VACCINE_BY_ID_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_VACCINE_BY_ID().type: {
                return {
                    ...defaultState,
                };
            }
            default:
                return state;
        }
    },
});
