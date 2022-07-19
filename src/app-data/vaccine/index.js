import { TOKEN_KEY } from 'app-configs';
import { REQUEST_STATE } from 'app-configs';
import { POST } from 'app-data/fetch';
import { GET } from 'app-data/fetch';

export const apiGetVaccineById = async (id, params) => {
    try {
        const response = await GET(`/api/v1/condition/${id}`, params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
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
