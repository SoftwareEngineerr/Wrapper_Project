import { Navigate, Outlet } from 'react-router'
import Label from '../components/xaoasoft/label';
import Login from '../veiws/Website/authentication/Login/login';
import Otp from '../veiws/Website/authentication/otp/otp';
import Home from '../veiws/Website/Home/Home';
// import { Login } from '@mui/icons-material';
import  FullLayout  from '../layouts/full/FullLayout'
import { RouteHeader } from '../constant/routeAndHeader';


const PrivateRoute = RouteHeader().router.Menu;

export const Router = [
    {
        path:'/',
        element: <><Outlet /></>,
        children:[
            {path:'/' , element: <Navigate to="/home" /> },
            {path:'/home' , element:<Home />},
        ]
    },
    {
        path:'/private',
        // element: <div id='fullLayout'><FullLayout /></div>,
        children:[
            ...PrivateRoute
            
        ]
    }
];