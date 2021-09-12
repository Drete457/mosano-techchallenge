import { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'components/error-boundary';
import Loading from 'components/loading';
import routes from 'helpers/router/index.js';
import 'i18n';
import 'styling/index.css';

const Home: React.FC = () => {
    return (
        <>
            <HashRouter>
                <Suspense fallback={<Loading />}>
                    <ErrorBoundary>
                        <Switch>
                            {routes.map?.(page => (
                                <Route
                                    path={page.path}
                                    key={page.name}
                                    exact={page.exact}
                                    render={() => <page.component />}
                                />
                            ))}
                        </Switch>
                    </ErrorBoundary>
                </Suspense>
            </HashRouter>
        </>
    );
};

export default Home;
