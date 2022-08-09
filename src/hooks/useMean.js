import {useState} from 'react';
import {useAuth} from '.'
import {getMeanApi, addMeanApi, updateMeanApi, deleteMeanApi } from '../api/mean';

export function useMean() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [means, setMeans] = useState(null);
    const {auth} = useAuth();
    const getMeans = async () => {
        try {
            setLoading(true);
            const response = await getMeanApi();
            setLoading(false);
            setMeans(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addMeans = async (data) => {
        try {
            setLoading(true);
            await addMeanApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateMeans = async (id, data) => {
        try {
            setLoading(true);
            await updateMeanApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteMeans = async (id) => {
        try {
            setLoading(true);
            await deleteMeanApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        means,
        getMeans,
        addMeans,
        updateMeans,
        deleteMeans,
    }
}