//ClientLayout.js: Configuración de la vista del cliente.
import React from 'react';
import './ClientLayout.scss';

//Componente que recibe props(en este caso el children).
//Children: es el contenido que tiene nuestro layout.
export function ClientLayout(props) {
    const { children } = props;
  return (
    <div>
      <p>PRUEBA</p>
      {children}
    </div>
  );
}
