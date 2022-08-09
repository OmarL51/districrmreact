import {BASE_API} from '../utils/constants';

export async function getQuoteTypeApi(){
    try {
        const url = `${BASE_API}/api/quotetypes/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function addQuoteTypeApi(data, token){
    try {
        const url = `${BASE_API}/api/quotetypes/`;
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

export async function updateQuoteTypeApi(id, data, token){
    try {
       const url = `${BASE_API}/api/quotetypes/${id}/`;
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

export async function deleteQuoteTypeApi(id, token) {
    try {
       const url = `${BASE_API}/api/quotetypes/${id}/`;
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
