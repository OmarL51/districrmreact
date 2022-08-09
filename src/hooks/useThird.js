import {useState} from 'react';
import {useAuth} from '.'
import {getThirdApi, addThirdApi, updateThirdApi, deleteThirdApi } from '../api/third';

export function useThird() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [thirds, setThirds] = useState(null);
    const {auth} = useAuth();
    const getThirds = async () => {
        try {
            setLoading(true);
            const response = await getThirdApi();
            setLoading(false);
            setThirds(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addThirds = async (data) => {
        try {
            setLoading(true);
            await addThirdApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateThirds = async (id, data) => {
        try {
            setLoading(true);
            await updateThirdApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteThirds = async (id) => {
        try {
            setLoading(true);
            await deleteThirdApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        thirds,
        getThirds,
        addThirds,
        updateThirds,
        deleteThirds,
    }
}