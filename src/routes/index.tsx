import * as React from 'react';
import IndexPage from './IndexPage';
import NotFoundPage from './NotFoundPage';

export const ROUTE_ROOT = '/';
export const ROUTE_NOT_FOUND = '*';

export const publicRoutes = [
    {
        path: ROUTE_ROOT,
        element: <IndexPage />,
    },
    {
        path: ROUTE_NOT_FOUND,
        element: <NotFoundPage />,
    },
];
