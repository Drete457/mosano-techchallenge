import { Suspense, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'components/error-boundary';
import Loading from 'components/loading';
import Revisited from 'components/revisited';
import routes from 'helpers/router/index.js';
import User from 'helpers/type/user';
import 'i18n';
import 'styling/index.css';

const Home: React.FC = () => {
    const [login, setLogin] = useState<boolean>(true);

    return (
        <>
            <HashRouter>
                <Suspense fallback={<Loading />}>
                    <ErrorBoundary>
                        <Switch>
                            {routes.map?.(page => {
                                if (page.name === 'Revisited') {
                                    const sessionData: string | null =
                                        sessionStorage.getItem('usersList');
                                    let array: User[] = [];

                                    if (sessionData !== null) {
                                        array = JSON.parse(sessionData);
                                    }

                                    return (
                                        <Route
                                            path={page.path}
                                            key={page.name}
                                            exact={page.exact}
                                            render={() => {
                                                return login ? (
                                                    <Revisited
                                                        usersList={array}
                                                    />
                                                ) : (
                                                    <p>no login</p>
                                                );
                                            }}
                                        />
                                    );
                                }

                                return (
                                    <Route
                                        path={page.path}
                                        key={page.name}
                                        exact={page.exact}
                                        render={() => <page.component />}
                                    />
                                );
                            })}
                        </Switch>
                    </ErrorBoundary>
                </Suspense>
            </HashRouter>
        </>
    );
};

export default Home;
