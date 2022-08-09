// Logica del SideMenu
import React from 'react';
import {Menu, Icon} from 'semantic-ui-react'
// Link para especificar la ruta y useLocation para saber en que ruta nos encontramos
import {Link, useLocation} from 'react-router-dom';
import {useAuth} from '../../../hooks';
import './SideMenu.scss';

export function SideMenu(props) {
    const {children} = props;
    const {pathname} = useLocation();
  return (
    <div className='side-menu-admin'>
      <MenuLeft pathname={pathname}/>
      <div className='content'>{children}</div>
    </div>
  )
}

// Menu lateral del sideMenu

function MenuLeft(props) {
    const {pathname} = props;
    const {auth} = useAuth();

    return (

        <Menu fixed='left' borderless className='side' vertical>
            <br/>
            <Menu.Item as={Link} to={'/admin'} active={pathname === '/admin'}>
                <Icon name='home' /><strong style={{color: '#254478' }}>Home</strong>
            </Menu.Item>
            
            <Menu.Item as={Link} to={'/admin/incidences'} active={pathname === '/admin/incidence'}>
                <Icon name='cart' /><strong style={{color: '#254478' }}>Pedidos</strong>
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/quotes'} active={pathname === '/admin/quotes'}>
                <Icon name='clipboard' /><strong style={{color: '#254478' }}>Cotizaciones</strong>
            </Menu.Item>
            
            {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/statuses'} active={pathname === '/admin/table'}>
                <Icon name='bars' /><strong style={{color: '#254478' }}>Estados</strong>
            </Menu.Item>
            )}

{auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/thirds'} active={pathname === '/admin/table'}>
                <Icon name='industry' /><strong style={{color: '#254478' }}>Terceros</strong>
            </Menu.Item>
            )}
            
            {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/incidencetypes'} active={pathname === '/admin/incidencetypes'}>
                <Icon name='folder' /><strong style={{color: '#254478' }}>Tipos de incidencia</strong>
            </Menu.Item>
            )}
                 {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/quotetypes'} active={pathname === '/admin/quotetypes'}>
                <Icon name='clipboard list' /><strong style={{color: '#254478' }}>Tipos de cotización</strong>
            </Menu.Item>
            )}
{auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/unexpecteds'} active={pathname === '/admin/table'}>
                <Icon name='newspaper' /><strong style={{color: '#254478' }}>Novedades</strong>
            </Menu.Item>
            )}
             {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/means'} active={pathname === '/admin/means'}>
                <Icon name='medium' /><strong style={{color: '#254478' }}>Medios</strong>
            </Menu.Item>
            )}
               {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/zones'} active={pathname === '/admin/zones'}>
                <Icon name='tablet' /><strong style={{color: '#254478' }}>Zonas</strong>
            </Menu.Item>
            )}
            {auth.me?.is_staff &&(
            <Menu.Item as={Link} to={'/admin/users'} active={pathname === '/admin/users'}>
                <Icon name='users' /><strong style={{color: '#254478' }}>Usuarios</strong>
            </Menu.Item>
            )}
            

        </Menu>

    )
}