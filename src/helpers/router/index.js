import { lazy } from 'react';

const MainPage = lazy(() => import('views/main-page'));
const ErrorPage = lazy(() => import('views/error-page'));
const routes = [
    { path: '/', exact: true, name: 'Main Page', component: MainPage },
    { path: '/revisited', exact: true, name: 'Revisited', component: MainPage },
    { name: 'Error Page', component: ErrorPage },
];

export default routes;
