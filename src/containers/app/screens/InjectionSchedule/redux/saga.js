import { REQUEST_STATE } from 'app-configs';
import { apiGetChildrenByParentId } from 'app-data/child';
import { apiGetCommingSchedules } from 'app-data/schedule';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
import {
    GET_COMMING_SCHEDULE,
    GET_COMMING_SCHEDULE_FAIL,
    GET_COMMING_SCHEDULE_SUCCESS,
} from './action';

function* getCommingSchedule({ type, payload }) {
    const { parentId } = payload;
    try {
        const response = yield call(apiGetCommingSchedules, parentId);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_COMMING_SCHEDULE_SUCCESS({
                    data: response?.data ?? [],
                }),
            );
        } else {
            yield put(GET_COMMING_SCHEDULE_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export default function* () {
    yield takeLatest(GET_COMMING_SCHEDULE().type, getCommingSchedule);
}
