import { useState, useCallback } from 'react';
import ref from 'api/ref';

type Loading = boolean;
type CatchError = string;

type Data = string[];
type SetData = React.Dispatch<React.SetStateAction<Data>>;
type GetCountries = (setData: SetData) => void;
type CountriesFunction = () => {
    isLoading: Loading;
    error: CatchError;
    data: Data;
    execute: () => void;
};

export const getCountries: GetCountries = async setData => {
    await fetch(ref.countries)
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {
                const newArray: string[] = [];
                result.forEach(country => newArray.push(country?.name));

                setData(newArray);
            }
        });
};

const useGetCountries: CountriesFunction = () => {
    const [isLoading, setIsLoading] = useState<Loading>(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<Data>(['']);

    const execute = async () => {
        try {
            setIsLoading(true);
            getCountries(setData);
            setIsLoading(false);
        } catch (e: unknown) {
            if (typeof e === 'string') {
                setError(e.toUpperCase());
            } else if (e instanceof Error) {
                setError(e.message);
            }
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        data,
        execute: useCallback(execute, []),
    };
};

export default useGetCountries;
