import { UserData } from "../../hooks/FirstTimeWebSrn/Websrn";


const web = localStorage.getItem('server');

const initialState = {
    //website api's
    imageServer: `${web}/public/`,
    Login:`${web}/apk/login`,
    Web:`${web}/WebSrn`,
    // DashBoard Api's
    Fess:`${web}/apk/showFess`
};

const Api = (state = initialState) => {
        return state;
}
export default Api;
