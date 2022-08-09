import {useState} from 'react';
import {useAuth} from '.'
import {getStatusApi, addStatusApi, updateStatusApi, deleteStatusApi } from '../api/status';

export function useStatus() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [statuses, setStatuses] = useState(null);
    const {auth} = useAuth();
    const getStatuses = async () => {
        try {
            setLoading(true);
            const response = await getStatusApi();
            setLoading(false);
            setStatuses(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addStatuses = async (data) => {
        try {
            setLoading(true);
            await addStatusApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateStatuses = async (id, data) => {
        try {
            setLoading(true);
            await updateStatusApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteStatuses = async (id) => {
        try {
            setLoading(true);
            await deleteStatusApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        statuses,
        getStatuses,
        addStatuses,
        updateStatuses,
        deleteStatuses,
    }
}