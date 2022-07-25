export function GET_COMMING_SCHEDULE(payload) {
    return {
        type: 'GET_COMMING_SCHEDULE',
        payload,
    };
}
export function GET_COMMING_SCHEDULE_SUCCESS(payload) {
    return {
        type: 'GET_COMMING_SCHEDULE_SUCCESS',
        payload,
    };
}
export function GET_COMMING_SCHEDULE_FAIL(payload) {
    return {
        type: 'GET_COMMING_SCHEDULE_FAIL',
        payload,
    };
}
export function RESET_GET_COMMING_SCHEDULE(payload) {
    return {
        type: 'RESET_GET_COMMING_SCHEDULE',
        payload,
    };
}
