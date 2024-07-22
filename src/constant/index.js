import { useSelector } from "react-redux";
import Showclasses from "../components/showclasses";
import { useState } from "react";

const remarks = [
    {name:'Excellent'},
    {name:'Very Good'},
    {name:'Good'},
    {name: 'Average'},
    {name:'Poover'}
];

export const Main = ()=> {
    // const imageUrl = useSelector((State)=>State.Api.Imagelink);
    //   const [classData , setClassData] = useState(useSelector((state) => state.Showclasses.classes));

    // debugger;
    return{
    Login:{
        inputs:[
            {data: 'User Name', type: 'text',feildtype:'input', required: true, name: 'username' , label:'User Name'},
            {data: 'Password', type: 'password',feildtype:'input', required: true, name: 'password', label:'Password'},
            {data: 'Create Class', type: 'submit', required: true, name: 'Roll', feildtype:'button', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
        ],
        butn:'Sign In',
        forget:'Forgot Password ?',
        label:"Remeber this Device"
    },
    otp:{
        inputs:[
            {data: '07012345678', type: 'number', required: true, name: 'Mobile' , label:'Parent Mobile'},
            {data: '123456789', type: 'number', required: true, name: 'Otp' , label:'Otp'},
            {data: 'example.com', type: 'text', required: true, name: 'server' , label:'Server'},
            // {data: 'Password', type: 'password', required: true, name: 'password', label:'Password'},
        ],
        butn:'Sign In',
        forget:'Forgot Password ?',
        label:"Remeber this Device"
    },
    TeacherReport:{
        inputs : [
            {data: 'Roll Number', type: 'text', required: true,  style:'max-width: 800px', name: 'RollNum', feildtype:'suggestioninput', lg: 2 , md: 4, sm: 6, xs: 12, lang:'en'},
            {data: 'Comments', type: 'text', required: true,  style:'max-width: 800px', name: 'Comments', feildtype:'input', lg: 2 , md: 4, sm: 6, xs: 12, lang:'en'},
            // {data: 'Date', type: 'text', required: true,  style:{maxWidth: '800px'}, name: 'Date', feildtype:'date', lg: 2 , md: 4, sm: 6, xs: 12, lang:'en'},
            {data: 'Subject Name', type: 'text', required: true,  style:'max-width: 800px', name: 'Subject', feildtype:'input', lg: 2 , md: 4, sm: 6, xs: 12, lang:'en'},
            // {data: 'Remarks', type: 'text', required: true,  style:'max-width: 800px; margin-top: 10px', name: 'Sub_Name', suggestion: remarks, feildtype:'suggestioninput', lg: 2 , md: 4, sm: 6, xs: 12, lang:'en'},
        ]
    },
    }
};