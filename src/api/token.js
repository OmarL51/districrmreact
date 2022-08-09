import {TOKEN} from '../utils/constants';
// Almacenamos temporalmente nuestro token en el local storage
export function setToken(token){
    localStorage.setItem(TOKEN, token);
}

// Función que obtiene el token
export function getToken() {
    return localStorage.getItem(TOKEN);
}

// Función para eliminar el token
export function removeToken(){
    localStorage.removeItem(TOKEN);

}