import { useLayoutEffect } from 'react';
import useGetCountries from 'hooks/useGetCountries';

const MainPage: React.FC = () => {
    const { isLoading, error, data, execute } = useGetCountries();

    useLayoutEffect(() => {
        execute();
    }, [execute]);

    return (
        <div>
            <p>Inicial</p>
        </div>
    );
};

export default MainPage;
