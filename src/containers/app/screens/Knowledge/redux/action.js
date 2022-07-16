export function GET_VACCINE_BY_ID(payload) {
    return {
        type: 'GET_VACCINE_BY_ID',
        payload,
    };
}
export function GET_VACCINE_BY_ID_SUCCESS(payload) {
    return {
        type: 'GET_VACCINE_BY_ID_SUCCESS',
        payload,
    };
}
export function GET_VACCINE_BY_ID_FAIL(payload) {
    return {
        type: 'GET_VACCINE_BY_ID_FAIL',
        payload,
    };
}
export function RESET_GET_VACCINE_BY_ID(payload) {
    return {
        type: 'RESET_GET_VACCINE_BY_ID',
        payload,
    };
}
