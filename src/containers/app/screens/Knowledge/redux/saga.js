import { REQUEST_STATE } from 'app-configs';
import { apiGetVaccineById } from 'app-data/vaccine';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
import { GET_VACCINE_BY_ID, GET_VACCINE_BY_ID_FAIL, GET_VACCINE_BY_ID_SUCCESS } from './action';

function* getVaccineById({ type, payload }) {
    const { id } = payload;
    try {
        const response = yield call(apiGetVaccineById, id);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_VACCINE_BY_ID_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_VACCINE_BY_ID_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export default function* () {
    yield takeLatest(GET_VACCINE_BY_ID().type, getVaccineById);
}
