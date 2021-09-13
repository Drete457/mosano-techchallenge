import { useLayoutEffect } from 'react';
import useGetCountries from 'hooks/useGetCountries';
import Footer from 'components/footer';
import Form from 'components/form';

const MainPage: React.FC = () => {
    const { isLoading, error, data, execute } = useGetCountries();

    useLayoutEffect(() => {
        execute();
    }, [execute]);

    return (
        <>
            <main>
                <Form />
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
