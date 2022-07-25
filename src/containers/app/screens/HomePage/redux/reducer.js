import { REQUEST_STATE } from 'app-configs';
import { isEmptyValue } from 'helpers/check';
import { combineReducers } from 'redux';
import {
    GET_CHILDREN_BY_ID,
    GET_CHILDREN_BY_ID_FAIL,
    GET_CHILDREN_BY_ID_SUCCESS,
    GET_CHILDREN_BY_PARENT_ID,
    GET_CHILDREN_BY_PARENT_ID_FAIL,
    GET_CHILDREN_BY_PARENT_ID_SUCCESS,
    GET_SCHEDULE,
    GET_SCHEDULE_FAIL,
    GET_SCHEDULE_SUCCESS,
    RESET_GET_SCHEDULE,
    GET_CHILDREN_INJECT_BY_ID,
    GET_CHILDREN_INJECT_BY_ID_FAIL,
    GET_CHILDREN_INJECT_BY_ID_SUCCESS,
    RESET_GET_CHILDREN_BY_ID,
    RESET_GET_CHILDREN_BY_PARENT_ID,
    RESET_GET_CHILDREN_INJECT_BY_ID,
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
    children: (state = defaultState, action) => {
        switch (action.type) {
            case GET_CHILDREN_BY_ID().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_CHILDREN_BY_ID_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_CHILDREN_BY_ID_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_CHILDREN_BY_ID().type: {
                return {
                    ...defaultState,
                };
            }

            default:
                return state;
        }
    },
    schedule: (state = defaultState, action) => {
        switch (action.type) {
            case GET_SCHEDULE().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_SCHEDULE_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_SCHEDULE_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_SCHEDULE().type: {
                return { ...defaultState };
            }
            default:
                return state;
        }
    },
    childrenInjection: (state = defaultState, action) => {
        switch (action.type) {
            case GET_CHILDREN_INJECT_BY_ID().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case GET_CHILDREN_INJECT_BY_ID_SUCCESS().type: {
                const { data } = action.payload;

                function convertListInjection(injections = []) {
                    const result = {};
                    injections.map((injection) => {
                        if (isEmptyValue(result[injection.monthOldBaby])) {
                            result[injection.monthOldBaby] = [injection];
                        } else {
                            result[injection.monthOldBaby].push(injection);
                        }
                    });
                    return result;
                }
                return {
                    ...state,
                    data: convertListInjection(data),
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case GET_CHILDREN_INJECT_BY_ID_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_GET_CHILDREN_INJECT_BY_ID().type: {
                return {
                    ...defaultState,
                };
            }
            default:
                return state;
        }
    },
});
