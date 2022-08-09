import {BASE_API} from '../utils/constants';

export async function getThirdApi(){
    try {
        const url = `${BASE_API}/api/thirds/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function addThirdApi(data, token){
    try {
        const url = `${BASE_API}/api/thirds/`;
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

export async function updateThirdApi(id, data, token){
    try {
       const url = `${BASE_API}/api/thirds/${id}/`;
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

export async function deleteThirdApi(id, token) {
    try {
       const url = `${BASE_API}/api/thirds/${id}/`;
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