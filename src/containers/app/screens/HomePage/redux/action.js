export function GET_CHILDREN_BY_PARENT_ID(payload) {
    return {
        type: 'GET_CHILDREN_BY_PARENT_ID',
        payload,
    };
}

export function GET_CHILDREN_BY_PARENT_ID_SUCCESS(payload) {
    return {
        type: 'GET_CHILDREN_BY_PARENT_ID_SUCCESS',
        payload,
    };
}

export function GET_CHILDREN_BY_PARENT_ID_FAIL(payload) {
    return {
        type: 'GET_CHILDREN_BY_PARENT_ID_FAIL',
        payload,
    };
}

export function RESET_GET_CHILDREN_BY_PARENT_ID(payload) {
    return {
        type: 'RESET_GET_CHILDREN_BY_PARENT_ID',
        payload,
    };
}
//-----------------------
export function GET_CHILDREN_BY_ID(payload) {
    return {
        type: 'GET_CHILDREN_BY_ID',
        payload,
    };
}
export function GET_CHILDREN_BY_ID_SUCCESS(payload) {
    return {
        type: 'GET_CHILDREN_BY_ID_SUCCESS',
        payload,
    };
}
export function GET_CHILDREN_BY_ID_FAIL(payload) {
    return {
        type: 'GET_CHILDREN_BY_ID_FAIL',
        payload,
    };
}
export function RESET_GET_CHILDREN_BY_ID(payload) {
    return {
        type: 'RESET_GET_CHILDREN_BY_ID',
        payload,
    };
}
