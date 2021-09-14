import { useLayoutEffect, useState, useCallback } from 'react';
import useGetCountries from 'hooks/useGetCountries';
import Footer from 'components/footer';
import Form from 'components/form';
import Table from 'components/table';
import User from 'helpers/type/user';
import userFormat from 'helpers/format/user';

const MainPage: React.FC = () => {
    const [user, setUser] = useState<User>({ ...userFormat });
    const [usersList, setUsersList] = useState<User[]>([]);
    const { isLoading, error, data, execute } = useGetCountries();

    const updateUserList = useCallback(
        async (newUser: User) => {
            setUsersList([newUser, ...usersList]);
        },
        [usersList],
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

    return (
        <>
            <main>
                <Form setUser={setUser} />
                <Table usersList={usersList} />
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
        </>
    );
};

export default MainPage;
