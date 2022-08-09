// Contexto para el sistema de autenticación
import React, {useState, useEffect, createContext} from 'react';
import {setToken, getToken, removeToken} from '../api/token';
import {useUser} from '../hooks/useUser';

// Creamos el contexto 
export const AuthContext = createContext({
    // Como aun no sabemos si el usuairo esta logueado o no comenzara asi
    auth: undefined,
    // Función de login que actualizara el auth
    login: () => null,
    // Función para desloguearse 
    logout: () =>  null,
});

// Controla todas las acciones del contexto 
export function AuthProvider(props){
    const {children} = props;
    const [auth, setAuth] = useState(undefined)
    const {getMe} = useUser();

    useEffect(() => {
        // Función anonima autoejecutable 
        (async () => {
            const token = getToken();
            // Validamos si el token existe
            if(token){
                const me = await getMe(token);
                setAuth({token, me});

            } else{
                setAuth(null);
            }
        })();
    }, [])
    const login = async (token) => {
        // Lo primero que hace el usuario al hacer login
        setToken(token);
        // Obtenemos los datos del usuario
        const me = await getMe(token);
        // Actualizamos el estado de la autenticación 
        setAuth({token, me});

    };
    const logout = () => {
        // Si la sesión tiene contenido ó el usuario esta logueado 
        if(auth){
            removeToken();
            // Para cerrar la sesión 
            setAuth(null);
        }
    }
    // Lo que tiene nuestro contexto 
    const valueContext = {
        auth,
        // Función de login que actualizara el auth
        login,
        // Función para desloguearse 
        logout,
    }
    
    if(auth === undefined ) return null;

    return (

        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
    }
