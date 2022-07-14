import { TOKEN_KEY } from 'app-configs';
import { REQUEST_STATE } from 'app-configs';
import { POST } from 'app-data/fetch';
import { GET } from 'app-data/fetch';

export const apiGetChildrenByParentId = async (parentId, params) => {
    try {
        const response = await GET(`/api/v1/child/parent/${parentId}`, params, {
            isFullPath: false,
        });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
            total: response.total,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiGetChildrenById = async (id, params) => {
    try {
        const response = await GET(`/api/v1/child/${id}`, params, {
            isFullPath: false,
        });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
            total: response.total,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiGetChildrenInjectById = async ({ id, params }) => {
    console.log('ID: ', id);
    // cái này là object ko phải string, sẽ có 2 cách sửa.
    // Cách 1:(id,params)=> ({id,params}) Như thế này thì id kia sẽ ko phải là object nữa, mà là string, path API sẽ đúng
    // Cái này truyền vào id, params. Giờ check trong saga xem đúng chưa.
    try {
        const response = await GET(`/api/v1/inject/child/${id}`, params, {
            isFullPath: false,
        });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
            total: response.total,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
