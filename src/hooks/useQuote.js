import {useState} from 'react';
import {useAuth} from '.'
import { getQuoteApi, addQuoteApi, updateQuoteApi , deleteQuoteApi } from '../api/quote';

export function useQuote() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [quotes, setQuotes] = useState(null);
    const {auth} = useAuth();
    const getQuotes = async () => {
        try {
            setLoading(true);
            const response = await getQuoteApi();
            setLoading(false);
            setQuotes(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addQuotes = async (data) => {
        try {
            setLoading(true);
            await addQuoteApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    };

    const updateQuotes = async (id, data) => {
        try {
            setLoading(true);
            await updateQuoteApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteQuotes = async (id) => {
        try {
            setLoading(true);
            await deleteQuoteApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        quotes,
        getQuotes,
        addQuotes,
        updateQuotes,
        deleteQuotes,
    }
}