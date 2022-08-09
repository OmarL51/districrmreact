import {useState} from 'react';
import {useAuth} from '.'
import { getIncidenceTypeApi, addIncidenceTypeApi, updateIncidenceTypeApi, deleteIncidenceTypeApi } from '../api/incidencety';

export function useIncidencety() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [incidencetypes, setIncidenceTypes] = useState(null);
    const {auth} = useAuth();
    const getIncidenceTypes = async () => {
        try {
            setLoading(true);
            const response = await getIncidenceTypeApi();
            setLoading(false);
            setIncidenceTypes(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addIncidenceTypes = async (data) => {
        try {
            setLoading(true);
            await addIncidenceTypeApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateIndicenceTypes = async (id, data) => {
        try {
            setLoading(true);
            await updateIncidenceTypeApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteIncidenceTypes = async (id) => {
        try {
            setLoading(true);
            await deleteIncidenceTypeApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        incidencetypes,
        getIncidenceTypes,
        addIncidenceTypes,
        updateIndicenceTypes,
        deleteIncidenceTypes,
    }
}