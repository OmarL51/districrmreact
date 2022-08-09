//routes.admin.js: Gestiona las rutas de la parte del administrador
import {AdminLayout} from '../layouts';
import { HomeAdmin, UsersAdmin, IncidenceTypesAdmin, IncidencesAdmin, StatusesAdmin, ThirdsAdmin, UnexpectedsAdmin, MeansAdmin, ZonesAdmin, QuotesAdmin, QuoteTypesAdmin } from '../pages/Admin';


//const que crea el objeto de configuración para la ruta.
const routesAdmin=[
    {
        //Path de la ruta.
        path : '/admin',
        //Layout de la ruta.
        layout: AdminLayout,
        //Componente de la ruta.
        component: HomeAdmin,

        exact: true,
    },
    {
         //Path de la ruta.
         path : '/admin/users',
         //Layout de la ruta.
         layout: AdminLayout,
         //Componente de la ruta.
         component: UsersAdmin,

         exact: true,

    },
    {
        //Path de la ruta.
        path : '/admin/incidencetypes',
        //Layout de la ruta.
        layout: AdminLayout,
        //Componente de la ruta.
        component: IncidenceTypesAdmin,

        exact: true,

   },
   {
    //Path de la ruta.
    path : '/admin/incidences',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: IncidencesAdmin,

    exact: true,

},
{
    //Path de la ruta.
    path : '/admin/statuses',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: StatusesAdmin,

    exact: true,

},  {
    //Path de la ruta.
    path : '/admin/unexpecteds',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: UnexpectedsAdmin,

    exact: true,

},

{
    //Path de la ruta.
    path : '/admin/thirds',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: ThirdsAdmin,

    exact: true,

},

{
    //Path de la ruta.
    path : '/admin/means',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: MeansAdmin,

    exact: true,

},

{
    //Path de la ruta.
    path : '/admin/zones',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: ZonesAdmin,

    exact: true,

},

{
    //Path de la ruta.
    path : '/admin/quotes',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: QuotesAdmin,

    exact: true,

},

{
    //Path de la ruta.
    path : '/admin/quotetypes',
    //Layout de la ruta.
    layout: AdminLayout,
    //Componente de la ruta.
    component: QuoteTypesAdmin,

    exact: true,

}
];

export default routesAdmin;