import { REQUEST_STATE } from 'app-configs';
import { apiGetChildrenByParentId } from 'app-data/child';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
import {
    GET_CHILDREN_BY_PARENT_ID,
    GET_CHILDREN_BY_PARENT_ID_FAIL,
    GET_CHILDREN_BY_PARENT_ID_SUCCESS,
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

export default function* () {
    yield takeLatest(GET_CHILDREN_BY_PARENT_ID().type, getChildrenByParentId);
}
