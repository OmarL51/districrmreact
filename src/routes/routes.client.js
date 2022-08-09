//routes.client.js: Gestiona las rutas del cliente.
import { ClientLayout } from '../layouts';
import { Home } from '../pages/Client';

//const que crea el objeto de configuración para la ruta.
const routesClient=[
    {
         //Path de la ruta.
        path: '/',
         //Layout de la ruta.
        layout: ClientLayout,
        //Componente de la ruta.
        component: Home,

    },

];

export default routesClient;