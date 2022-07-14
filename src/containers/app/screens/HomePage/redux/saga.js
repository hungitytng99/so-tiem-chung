import { REQUEST_STATE } from 'app-configs';
import { apiGetChildrenById } from 'app-data/child';
import { apiGetChildrenInjectById } from 'app-data/child';
import { apiGetChildrenByParentId } from 'app-data/child';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
import {
    GET_CHILDREN_BY_ID,
    GET_CHILDREN_BY_ID_FAIL,
    GET_CHILDREN_BY_ID_SUCCESS,
    GET_CHILDREN_BY_PARENT_ID,
    GET_CHILDREN_BY_PARENT_ID_FAIL,
    GET_CHILDREN_BY_PARENT_ID_SUCCESS,
    GET_CHILDREN_INJECT_BY_ID,
    GET_CHILDREN_INJECT_BY_ID_FAIL,
    GET_CHILDREN_INJECT_BY_ID_SUCCESS,
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
function* getChildrenInjectById({ type, payload }) {
    const { id } = payload;
    try {
        const response = yield call(apiGetChildrenInjectById, { id });
        // Cái câu này: yield call(apiGetChildrenInjectById, { id }, a, b, c,d);
        // Sẽ tương đương với: await apiGetChildrenInjectById( {id} );
        // Kiểu vậy. Nếu viết thêm. thì nó sẽ tuowng đương với:
        // await apiGetChildrenInjectById( {id}, a, b, c, d);
        // Cách 2 là truyền vào id thôi, ko truyền  { id }.
        // Cách 2 sẽ là . Kiểu htees. nma thôi dùng cách 1 rồi thì thôi.
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_CHILDREN_INJECT_BY_ID_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_CHILDREN_INJECT_BY_ID_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export default function* () {
    yield takeLatest(GET_CHILDREN_BY_PARENT_ID().type, getChildrenByParentId);
    yield takeLatest(GET_CHILDREN_BY_ID().type, getChildrenById);
    yield takeLatest(GET_CHILDREN_INJECT_BY_ID().type, getChildrenInjectById);
}
