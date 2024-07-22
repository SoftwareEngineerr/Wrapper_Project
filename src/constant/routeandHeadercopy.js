import { Navigate } from "react-router";
import { uniqueId } from "lodash";
import { IconAperture, IconCopy, IconLayoutDashboard,  IconLogin, IconMoodHappy, IconTypography, IconRegistered, IconUserPlus } from '@tabler/icons';
import Dashboard from "../veiws/Dashboard/Dashboard/Dashboard";
import MenuProfile from "../veiws/Dashboard/MenuProfile/MenuProfile";
import { useSelector } from "react-redux";

export const RouteHeaderCopy = () => {
  const userdata = useSelector((state)=>state.Auth.userdata)
    return {router:{
        Menu:[
            {path:'/Private/' , element: <Navigate to="/Private/Home" /> },
                  {
                    item: true,
                    navlabel: true,
                    subheader: "Home",
                    title: "",
                    icon: "",
                    href: "",
                    path: "",
                    element: "",
                  },
                  {
                    item: true,
                    navlabel: false,
                    subheader: "",
                    title: "Dashboard",
                    icon: IconLayoutDashboard,
                    href: "/Private/Home",
                    path: "/Private/Home",
                    element: <div id="Dashboard"><Dashboard /></div>,
                  },
             //   Profile Menu items
                  {
                    item: true,
                    id: uniqueId(),
                    title: 'My-Profile',
                    icon: IconCopy,
                    // href: '/Private/Shoqa',
                    path: '/Private/My-Profile',
                    element: <div id="Profile"><MenuProfile /></div>
                    },
        ]
    }
}
}