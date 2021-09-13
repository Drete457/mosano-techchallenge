import { useLayoutEffect } from 'react';
import useGetCountries from 'hooks/useGetCountries';
import Footer from 'components/footer';

const MainPage: React.FC = () => {
    const { isLoading, error, data, execute } = useGetCountries();

    useLayoutEffect(() => {
        execute();
    }, [execute]);

    return (
        <>
            <main />
            <Footer />
        </>
    );
};

export default MainPage;
