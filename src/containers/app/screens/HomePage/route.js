import React from 'react';
import { MODULES } from 'app-configs';
import { lazy } from 'react';
import { initModules } from 'router/index';

export const homePageModule = {
    key: 'homePage',
    path: 'HomePage',
};

export default {
    path: '/',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        await initModules([homePageModule], 'app');
        return import('.');
    }),
};

export const childRoutes = [
    {
        path: '/detail-child',
        exact: true,
        isPrivate: true,
        component: lazy(async () => {
            await initModules([homePageModule], 'app');
            return import('./pages/detailUser');
        }),
    },
    {
        path: '/injection-history',
        exact: true,
        isPrivate: true,
        component: lazy(async () => {
            await initModules([homePageModule], 'app');
            return import('./pages/InjectionHistory');
        }),
    },
];
