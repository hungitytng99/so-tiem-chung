import React from 'react';
import { MODULES } from 'app-configs';
import { lazy } from 'react';
import { initModules } from 'router/index';

export const featureModule = {
    key: 'feature',
    path: 'Feature',
};

export default {
    path: '/',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        await initModules([featureModule], 'app');
        return import('./pages/HomePage');
    }),
};

export const childRoutes = [];
