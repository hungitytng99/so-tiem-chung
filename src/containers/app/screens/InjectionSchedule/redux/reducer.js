import { REQUEST_STATE } from 'app-configs';
import { combineReducers } from 'redux';
import {
    GET_PATIENT_BY_ID,
    GET_PATIENT_BY_ID_FAIL,
    GET_PATIENT_BY_ID_SUCCESS,
    RESET_GET_PATIENT_BY_ID,
} from './action';

const defaultState = {
    state: null,
    data: null,
};

export default combineReducers({
    listPatient: (state = defaultState, action) => {
        switch (action.type) {
            case GET_PATIENT_BY_ID().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_PATIENT_BY_ID_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_PATIENT_BY_ID_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_PATIENT_BY_ID().type: {
                return {
                    ...defaultState,
                };
            }
            default:
                return state;
        }
    },
});
