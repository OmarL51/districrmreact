// APIs del usuario 
// importamos la constante 
import { BASE_API } from '../utils/constants';
// Todas las funciones Api tienen comunicación directa con el API Rest
// Funcion API login que recibe como parametro un objeto(formValue) que contiene los elementos del formulario
export async function loginApi(formValue) {
    try {
        // Definimos la url del login
        const url = `${BASE_API}/api/auth/login/`;
        // Definimos los parametros que debemos enviar 
        const params = {
            // Definimos el metodo por el cual se ejecutara la petición 
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            // Definimos los datos que enviamos en el body, usamos el JSON.stringfy para transformar el objeto en string
            body: JSON.stringify(formValue),

        };
        // Ejecutamos la petición 
        const response = await fetch(url, params);

        if(response.status !== 200){
            throw new Error('Usuario o contraseña incorrectos');

        }
        // Transformamos la respuesta de la petición en un json 
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

// Obtenemos los datos de usuario 
export async function getMeApi(token){
    try {
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
            headers: {
                // Enviamos petición autorizada 
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

// Obtenemos todos los usuarios de la app
export async function getUsersApi(token){
    try {
        const url = `${BASE_API}/api/users/`;
        const params = {
            headers: {
                // Enviamos petición autorizada 
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

export async function addUserApi(data, token){
    try {
        const url = `${BASE_API}/api/users/`;
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

export async function updateUserApi(id, data, token){
    try {
       const url = `${BASE_API}/api/users/${id}/`;
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

export async function deleteUserApi(id, token) {
    try {
       const url = `${BASE_API}/api/users/${id}/`;
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