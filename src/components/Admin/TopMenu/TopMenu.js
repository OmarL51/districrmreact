// Logica del TopMenu 
import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { useAuth } from '../../../hooks';
import './TopMenu.scss';
import logo from '../../../assets/MM.png'

export function TopMenu() {
    // Obtenemos los datos del usuario y la función logout 
  const {auth, logout} = useAuth();
   //  Función para tratar el auth 
  
  const renderName = () => {
      if(auth.me?.first_name && auth.me?.last_name) {
          return `${auth.me.first_name} ${auth.me.last_name}`;
      }
    // Si no existe nombre y apellido entonces retornamos el correo 
    return auth.me?.email;


  };
  return (
   <Menu fixed='top' className='top-menu-admin'>
       <Menu.Item className='top-menu-admin__logo'>
          <img src={logo} className='top-menu-admin__logo__loguito' align='center'/>
       </Menu.Item>

       <Menu.Menu position='right'>
           <Menu.Item style={{color: '#254478' }}>Hola, {renderName()}</Menu.Item>
           <Menu.Item onClick={logout}>
           <Icon name='sign-out'/>
           </Menu.Item>
       </Menu.Menu>
   </Menu>
  )
}
