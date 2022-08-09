import {useState} from 'react';
import {useAuth} from '.'
import { getIncidenceApi, addIncidenceApi, updateIncidenceApi , deleteIncidenceApi } from '../api/incidence';

export function useIncidence() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [incidences, setIncidences] = useState(null);
    const {auth} = useAuth();
    const getIncidences = async () => {
        try {
            setLoading(true);
            const response = await getIncidenceApi();
            setLoading(false);
            setIncidences(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    

    const addIncidences = async (data) => {
        try {
            setLoading(true);
            await addIncidenceApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    };

    const updateIncidences = async (id, data) => {
        try {
            setLoading(true);
            await updateIncidenceApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteIncidences = async (id) => {
        try {
            setLoading(true);
            await deleteIncidenceApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        incidences,
        getIncidences,
        addIncidences,
        updateIncidences,
        deleteIncidences,
    }
}