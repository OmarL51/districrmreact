//Navigationjs: Se importa en nuestra app y retorna todo nuestro sistema de rutas.
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import routes from './routes';
//lodash: Contiene funciones de Javascript pero mejoradas(en este caso lo instalamos para usar el map).
import { map } from 'lodash';

// Funcion Navigation: Aqui creamos nuestro sistema de rutas.
export function Navigation() {
   return (
     //BrowserRouter: Toda nuestra navegación va envuelta en BrowserRouter, es decir es el que contiene nuestra navegación.
     
        <BrowserRouter>
        <Routes>
        {/* routes: contiene un array con toda la configuración de la ruta. */}
        {/* map: es un bucle o ciclo, y le definimos que por cada iteración nos devuelva los datos de la ruta y el index de la iteración=>(route,index) */}
        {map(routes, (route,index) =>(
          <Route 
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.component/>
            </route.layout>
          }
          />
        ) )}
        </Routes>
        </BrowserRouter>
   );
}

