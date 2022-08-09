import {BASE_API} from '../utils/constants';

export async function getZoneApi(){
    try {
        const url = `${BASE_API}/api/zones/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function addZoneApi(data, token){
    try {
        const url = `${BASE_API}/api/zones/`;
        const params = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, params)
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function updateZoneApi(id, data, token){
    try {
       const url = `${BASE_API}/api/zones/${id}/`;
       const params = {
           method: 'PATCH',
           headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(data),
       };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function deleteZoneApi(id, token) {
    try {
       const url = `${BASE_API}/api/zones/${id}/`;
       const params = {
           method: 'DELETE',
           headers: {
            Authorization: `Bearer ${token}`,
           },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}