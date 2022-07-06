import { REQUEST_STATE } from 'app-configs';
import { PUT } from 'app-data/fetch';
import { POST } from 'app-data/fetch';
import { GET } from 'app-data/fetch';

export const apiGetListCerts = async (params) => {
    try {
        const response = await GET('/template/list/institution', params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
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

export const apiDetailTemplateConfig = async (id) => {
    try {
        const response = await GET(`/template/${id}`, {}, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
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

export const apiUpdateConfigCeft = async (config) => {
    try {
        const response = await PUT(`/template`, config, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
        };
    }
};

export const apiUploadAvatarIssuer = async (params) => {
    try {
        const response = await POST('/issuer/upload', params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
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
