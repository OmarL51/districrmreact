//AdminLayout.js: Configuración de la vista del cliente.
import React from 'react';
import {LoginAdmin} from '../../pages/Admin'
import './AdminLayout.scss';
import {useAuth} from '../../hooks';
import {TopMenu, SideMenu} from '../../components/Admin'

// COMPONENTE AdminLayout: Validamos si el usuario esta logueado o no y dependiendo de esto le mostramos el home dle admin 
//Componente que recibe props(en este caso el children).
//Children: es el contenido que tiene nuestro layout.
export function AdminLayout(props) {
    const { children } = props;
    const {auth} = useAuth();
  

    if(!auth) return <LoginAdmin />;
    
  return (
    <div className='admin-layout'>
        <div className='admin-layout__menu'>
          <TopMenu/>
        </div>
        <div className='admin-layout__main-content'>
        <SideMenu>{children}</SideMenu>
        </div>
     
    </div>
  );
}