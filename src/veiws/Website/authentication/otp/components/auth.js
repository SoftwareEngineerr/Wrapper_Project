import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Main } from '../../../../../constant';
import { Input } from '../../../../../components/input/input';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginauth } from '../../../../../redux/actions/loginauth';
import { ShowLoader } from '../../../../../redux/actions/loader';


const Auth = (props) => {
    const [data , setData] = useState(Main().otp);
    const dispatch = useDispatch();
    const apilink = useSelector((state) => state.Api.Login);
    const veri = useSelector((state) => state.Auth.permission);
    const navigate = useNavigate()

    const initialInputValues = Object.fromEntries(
        data.inputs.map((item) => [item.name, ''])
    );

    const [inputValues, setInputValues] = useState(initialInputValues);
    console.log(inputValues)


    function handleInputChange(e) {
        // console.log(e.target.value)
        // if(e.target.name == 'server' && e.target.name != '')
        //     e.target.value = `http://${e.target.value}`
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    }

    function myfunc(event) {
        dispatch(ShowLoader('1'))
        event.preventDefault();
        // console.log(websrndata)
        localStorage.setItem("otp", inputValues.Otp);
        localStorage.setItem("server", `http://${inputValues.server}`); //set either it is a http or https
        const userdata = {Otp:inputValues.otp , Mobile:localStorage.getItem("mobileNumber")}
        const payload = {...userdata , api:apilink}
        // const payload = {...inputValues , api : apilink , WebSrn: JSON.parse(localStorage.getItem("WebSrn"))}

        console.log(payload)
        dispatch(loginauth(inputValues, localStorage.getItem('server')))
        // navigate('/auth/otp')
    }

    // useEffect(()=>{
    //     if(veri == true){
    //         window.location.href = `http://${window.location.host}/private/home`;
    //     }
    // },[veri])
    // console.log(RouteHeaderCopy().router)

    return (
        <form onSubmit={myfunc}>
            <Stack>
                {data.inputs.map((item, ind) => (
                    <Grid item lg={12} key={ind}>
                         <Box mt="25px">
                        <Typography variant="subtitle1"
                            fontWeight={600}  component="label" htmlFor='password' mb="5px" >
                                {item.label}
                            </Typography>
                            <Input
                                key={ind}
                                type={item.type}
                                placeholder={item.data}
                                required={item.required}
                                name={item.name}
                                onChange={(event)=>handleInputChange(event)}
                            />
                        </Box>
                    </Grid>
                ))}
                
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                // mt={2}
                sx={{marginTop:'10px'}}
                // component={Link}
                // to="/"
                type="submit"
                // onClick={console.log('butn')}
            >
                {data.butn}
            </Button>
        </Box>
            </Stack>
        </form>
    );
};

Auth.propTypes = {};

export default Auth;
