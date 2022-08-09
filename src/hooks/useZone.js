import {useState} from 'react';
import {useAuth} from '.'
import {getZoneApi, addZoneApi, updateZoneApi, deleteZoneApi } from '../api/zone';

export function useZone() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [zones, setZones] = useState(null);
    const {auth} = useAuth();
    const getZones = async () => {
        try {
            setLoading(true);
            const response = await getZoneApi();
            setLoading(false);
            setZones(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    const addZones = async (data) => {
        try {
            setLoading(true);
            await addZoneApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateZones = async (id, data) => {
        try {
            setLoading(true);
            await updateZoneApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteZones = async (id) => {
        try {
            setLoading(true);
            await deleteZoneApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }
    
    return {
        loading,
        error,
        zones,
        getZones,
        addZones,
        updateZones,
        deleteZones,
    }
}