import { lazy } from 'react';

const MainPage = lazy(() => import('views/main-page'));

const routes = [
    { path: '/', exact: true, name: 'Main Page', component: MainPage },
];

export default routes;
