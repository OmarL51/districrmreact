//routes.js: Gestiona nuestras rutas.
//Aqui se combinan las rutas de routes.admin.js y routes.client.js.
import routerAdmin from './routes.admin';
import routerClient from './routes.client';
import {Error404} from '../pages'
import {BasicLayout} from '../layouts'
//Concatenamos los valores de los 2 array 
const routes = [...routerAdmin, ...routerClient,
{
    //Msj de error cuando el cliente intente acceder a una pagina que no existe.
    path:"*",
    layout:BasicLayout,
    component: Error404,

}];

export default routes;