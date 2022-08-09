import {useState} from 'react';
import {useAuth} from '.'
import {getUnexpectedApi, addUnexpectedApi, updateUnexpectedApi, deleteUnexpectedApi } from '../api/unexpected';

export function useUnexpected() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [unexpecteds, setUnexpecteds] = useState(null);
    const {auth} = useAuth();
    const getUnexpecteds = async () => {
        try {
            setLoading(true);
            const response = await getUnexpectedApi();
            setLoading(false);
            setUnexpecteds(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addUnexpecteds = async (data) => {
        try {
            setLoading(true);
            await addUnexpectedApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateUnexpecteds = async (id, data) => {
        try {
            setLoading(true);
            await updateUnexpectedApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteUnexpecteds = async (id) => {
        try {
            setLoading(true);
            await deleteUnexpectedApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        unexpecteds,
        getUnexpecteds,
        addUnexpecteds,
        updateUnexpecteds,
        deleteUnexpecteds,
    }
}