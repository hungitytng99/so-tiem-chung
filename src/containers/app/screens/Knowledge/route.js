import React from 'react';
import { MODULES } from 'app-configs';
import { lazy } from 'react';
import { initModules } from 'router/index';

export const knowledgeModule = {
    key: 'knowledge',
    path: 'Knowledge',
};

export default {
    path: '/knowledge',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        await initModules([knowledgeModule], 'app');
        return import('.');
    }),
};

export const childRoutes = [];
