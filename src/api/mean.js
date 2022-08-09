import {BASE_API} from '../utils/constants';

export async function getMeanApi(){
    try {
        const url = `${BASE_API}/api/means/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function addMeanApi(data, token){
    try {
        const url = `${BASE_API}/api/means/`;
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

export async function updateMeanApi(id, data, token){
    try {
       const url = `${BASE_API}/api/means/${id}/`;
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

export async function deleteMeanApi(id, token) {
    try {
       const url = `${BASE_API}/api/means/${id}/`;
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