import { REQUEST_STATE } from 'app-configs';
import { combineReducers } from 'redux';
import {
    GET_CHILDREN_BY_PARENT_ID,
    GET_CHILDREN_BY_PARENT_ID_FAIL,
    GET_CHILDREN_BY_PARENT_ID_SUCCESS,
    RESET_GET_CHILDREN_BY_PARENT_ID,
} from './action';

const defaultState = {
    state: null,
    data: null,
};

export default combineReducers({
    listChildren: (state = defaultState, action) => {
        switch (action.type) {
            case GET_CHILDREN_BY_PARENT_ID().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_CHILDREN_BY_PARENT_ID_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_CHILDREN_BY_PARENT_ID_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_CHILDREN_BY_PARENT_ID().type: {
                return {
                    ...defaultState,
                };
            }
            default:
                return state;
        }
    },
});
