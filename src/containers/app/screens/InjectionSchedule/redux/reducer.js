import { REQUEST_STATE } from 'app-configs';
import { combineReducers } from 'redux';
import {
    GET_COMMING_SCHEDULE,
    GET_COMMING_SCHEDULE_FAIL,
    GET_COMMING_SCHEDULE_SUCCESS,
    RESET_GET_COMMING_SCHEDULE,
} from './action';

const defaultState = {
    state: null,
    data: null,
};

export default combineReducers({
    list: (state = defaultState, action) => {
        switch (action.type) {
            case GET_COMMING_SCHEDULE().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_COMMING_SCHEDULE_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_COMMING_SCHEDULE_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_COMMING_SCHEDULE().type: {
                return {
                    ...defaultState,
                };
            }
            default:
                return state;
        }
    },
});
