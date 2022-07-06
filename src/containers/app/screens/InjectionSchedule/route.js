import React from 'react';
import { MODULES } from 'app-configs';
import { lazy } from 'react';
import { initModules } from 'router/index';

export const homePageModule = {
    key: 'homePage',
    path: 'HomePage',
};

export default {
    path: '/injection-schedule',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        await initModules([homePageModule], 'app');
        return import('.');
    }),
};

export const childRoutes = [];
