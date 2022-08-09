import {useContext} from 'react';
import {AuthContext} from '../context';

// Función para obtener el valor de nuestro contexto
export const useAuth = () => useContext(AuthContext);