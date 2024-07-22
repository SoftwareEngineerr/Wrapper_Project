import { useState } from "react";

export const WebSrnStorage = () =>{
    const [data , setDate] = useState(JSON.parse(localStorage.getItem("WebSrn")));
    return data
} 
export const UserData = ()=>{ 
    const [data , setData ] = useState(JSON.parse(localStorage.getItem("User_Data")));
    return data 
};
export const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${UserData.token}`
}