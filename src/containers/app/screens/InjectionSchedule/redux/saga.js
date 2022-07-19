import { REQUEST_STATE } from 'app-configs';
import { apiGetPatientById } from 'app-data/injectionSchedule';
import { delay, put, takeLatest, call } from 'redux-saga/effects';
import { GET_PATIENT_BY_ID, GET_PATIENT_BY_ID_SUCCESS, GET_PATIENT_BY_ID_FAIL } from './action';

function* getPatientById({ type, payload }) {
    const { parentId } = payload;
    try {
        const response = yield call(apiGetPatientById, parentId);
        if (response.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_PATIENT_BY_ID_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_PATIENT_BY_ID_FAIL());
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export default function* () {
    yield takeLatest(GET_PATIENT_BY_ID().type, getPatientById);
}
