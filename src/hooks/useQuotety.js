import {useState} from 'react';
import {useAuth} from '.'
import { getQuoteTypeApi, addQuoteTypeApi, updateQuoteTypeApi, deleteQuoteTypeApi } from '../api/quotety';

export function useQuotety() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [quotetypes, setQuoteTypes] = useState(null);
    const {auth} = useAuth();
    const getQuoteTypes = async () => {
        try {
            setLoading(true);
            const response = await getQuoteTypeApi();
            setLoading(false);
            setQuoteTypes(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addQuoteTypes = async (data) => {
        try {
            setLoading(true);
            await addQuoteTypeApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateQuoteTypes = async (id, data) => {
        try {
            setLoading(true);
            await updateQuoteTypeApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteQuoteTypes = async (id) => {
        try {
            setLoading(true);
            await deleteQuoteTypeApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        quotetypes,
        getQuoteTypes,
        addQuoteTypes,
        updateQuoteTypes,
        deleteQuoteTypes,
    }
}