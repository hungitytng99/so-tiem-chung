import { REQUEST_STATE } from 'app-configs';
import { apiGetChildrenById } from 'app-data/child';
import { apiGetChildrenByParentId } from 'app-data/child';
import { apiGetSchedule } from 'app-data/schedule';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
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
} from './action';

function* getChildrenByParentId({ type, payload }) {
    const { parentId } = payload;
    try {
        const response = yield call(apiGetChildrenByParentId, parentId);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_CHILDREN_BY_PARENT_ID_SUCCESS({
                    data: response?.data,
                    total: response?.total ?? 0,
                }),
            );
        } else {
            yield put(GET_CHILDREN_BY_PARENT_ID_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
function* getChildrenById({ type, payload }) {
    const { id } = payload;
    try {
        const response = yield call(apiGetChildrenById, id);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_CHILDREN_BY_ID_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_CHILDREN_BY_ID_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

function* getSchedule({ type, payload }) {
    const { childId } = payload;
    try {
        const response = yield call(apiGetSchedule, childId);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_SCHEDULE_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_SCHEDULE_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export default function* () {
    yield takeLatest(GET_CHILDREN_BY_PARENT_ID().type, getChildrenByParentId);
    yield takeLatest(GET_CHILDREN_BY_ID().type, getChildrenById);
    yield takeLatest(GET_SCHEDULE().type, getSchedule);
}
