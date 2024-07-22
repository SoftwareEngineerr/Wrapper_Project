import { Navigate } from "react-router";
import { uniqueId } from "lodash";
import { IconAperture, IconCopy, IconLayoutDashboard,  IconLogin, IconMoodHappy, IconTypography, IconRegistered, IconUserPlus } from '@tabler/icons';
import { User_Data, } from "../hooks/Requests/localStroagedata";
import Home from "../veiws/Website/Home/Home";


// console.log(SelectedData())
export const RouteHeader = () => {
  return {
    router:{
      
        Menu:[
            {path:'/private/' , element: <Navigate to="/Private/Home" /> },
            // {path:'/Private/Home', element: <>Dashboard</>},
          
                  {
                    item: true,
                    navlabel: true,
                    subheader: <div><span>Home </span><span className="pashtoSpell">کورپاڼه</span></div>,
                    title: '',
                    icon: '',
                    href: '',
                    path: '',
                    element: ''
                  },
                  {
                    item: true,
                    navlabel: false,
                    subheader: '',
                    title: 'Dashboard',
                    icon: IconLayoutDashboard,
                    href: '/private/home',
                    path: '/private/home',
                    element: <div id="Dashboard"><Home /></div>
                  },
        ]
    }
  }
}