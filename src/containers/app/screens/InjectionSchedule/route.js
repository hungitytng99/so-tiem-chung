import React from 'react';
import { MODULES } from 'app-configs';
import { lazy } from 'react';
import { initModules } from 'router/index';

export const injectionScheduleModule = {
    key: 'commingSchedule',
    path: 'InjectionSchedule',
};

export default {
    path: '/injection-schedule',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        await initModules([injectionScheduleModule], 'app');
        return import('.');
    }),
};

export const childRoutes = [];
