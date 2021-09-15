import { useLayoutEffect, useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import useGetCountries from 'hooks/useGetCountries';
import Loading from 'components/loading';
import Footer from 'components/footer';
import Form from 'components/form';
import Table from 'components/table';
import User from 'helpers/type/user';
import userFormat from 'helpers/format/user';
import information from 'helpers/format/information';
import ErrorPage from 'views/error-page';
import TranslateButtons from 'components/translate-buttons';

const MainPage: React.FC = () => {
    const [t] = useTranslation();

    const [user, setUser] = useState<User>({ ...userFormat });
    const [usersList, setUsersList] = useState<User[]>([]);
    const [message, setMessage] = useState<string>('');

    const { isLoading, error, data, execute } = useGetCountries();

    const updateUserList = useCallback(
        async (newUser: User) => {
            const newMessage = information(newUser, i18n.language, t);
            const newArray = [newUser, ...usersList];

            setUsersList(newArray);
            setMessage(newMessage);

            const sessionData: string | null =
                sessionStorage.getItem('usersList');

            if (sessionData !== null) {
                const oldUsersList = JSON.parse(sessionData);
                const newArrayNewValues = [...newArray, ...oldUsersList];

                sessionStorage.removeItem('usersList');
                sessionStorage.setItem(
                    'usersList',
                    JSON.stringify(newArrayNewValues),
                );
            } else {
                sessionStorage.removeItem('usersList');
                sessionStorage.setItem('usersList', JSON.stringify(newArray));
            }
        },
        [usersList, t],
    );

    useLayoutEffect(() => {
        execute();
    }, [execute]);

    useLayoutEffect(() => {
        if (user.name !== '') {
            updateUserList(user);
            setUser({ ...userFormat });
        }
    }, [user, updateUserList]);

    useEffect(() => {
        setTimeout(setMessage, 10000, '');
    }, [message]);

    return (
        <>
            {error ? (
                <ErrorPage />
            ) : (
                <>
                    <header>
                        <TranslateButtons />
                    </header>
                    <main className="home">
                        <Form message={message} setUser={setUser} />
                        <Table usersList={usersList} setMessage={setMessage} />
                    </main>
                    <Footer />

                    <datalist id="countriesList">
                        {data.map?.(country => (
                            <option
                                aria-label={country}
                                key={country}
                                value={country}
                            />
                        ))}
                    </datalist>
                    {isLoading && <Loading />}
                </>
            )}
        </>
    );
};

export default MainPage;
