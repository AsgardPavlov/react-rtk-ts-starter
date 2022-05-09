import * as React from 'react';
import {useCallback} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './shared/Layout';
import {publicRoutes} from './routes';

export default function Application() {
    const getPublicRoutes = useCallback(
        () => publicRoutes.map(route => (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        )),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [publicRoutes],
    );

    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    {getPublicRoutes()}
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}
