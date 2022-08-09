import React from 'react';
import { Navigation } from './routes';
// Se usa para los errores 
import {ToastContainer} from 'react-toastify';
// Importamos nuestro contexto 
import { AuthProvider } from './context';

{/* Envolvemos nuestra app con el contexto AuthProvider  */}
export default function App() {
  return ( 
    <AuthProvider>
      <Navigation />

      <ToastContainer
      position='bottom-center'
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      />
      </AuthProvider>
  );
}


