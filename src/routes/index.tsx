import * as React from 'react';
import IndexPage from './IndexPage';
import NotFoundPage from './NotFoundPage';

export const ROUTE_ROOT = '/';
export const ROUTE_NOT_FOUND = '*';

export interface IRouteProps {
    path: string,
    element: React.ReactNode,
    items?: IRouteProps[],
}

export const publicRoutes: IRouteProps[] = [
    {
        path: ROUTE_ROOT,
        element: <IndexPage />,
    },
    {
        path: ROUTE_NOT_FOUND,
        element: <NotFoundPage />,
    },
];
