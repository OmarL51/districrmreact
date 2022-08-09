import {BASE_API} from '../utils/constants';

export async function getQuoteApi(){
    try {
        const url = `${BASE_API}/api/quotes/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
        
    }
}

export async function addQuoteApi(data, token){
    try {
        const url = `${BASE_API}/api/quotes/`;
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

export async function updateQuoteApi(id, data, token){
    try {
       const url = `${BASE_API}/api/quotes/${id}/`;
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

export async function deleteQuoteApi(id, token) {
    try {
       const url = `${BASE_API}/api/quotes/${id}/`;
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