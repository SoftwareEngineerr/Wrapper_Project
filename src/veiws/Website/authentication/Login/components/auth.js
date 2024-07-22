import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Main } from '../../../../../constant';
import { Input } from '../../../../../components/input/input';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Auth = (props) => {
    const [data , setData] = useState(Main().Login);
    const dispatch = useDispatch();
    const apilink = useSelector((state) => state.Api.Login);
    const veri = useSelector((state) => state.Auth.permission);
    const navigate = useNavigate();

    const initialInputValues = Object.fromEntries(
        data.inputs.map((item) => [item.name, ''])
    );

    const [inputValues, setInputValues] = useState(initialInputValues);


    function handleInputChange(e) {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    }

    function myfunc(event) {
        event.preventDefault();
        // console.log(websrndata)
        const payload = {...inputValues , api : apilink , WebSrn: JSON.parse(localStorage.getItem("WebSrn"))}
        // console.log(payload)
        // dispatch(loginauth(payload))
        localStorage.setItem("mobileNumber", inputValues.mobile);
        navigate('/auth/otp')
    }

    useEffect(()=>{
        if(veri == true){
            window.location.href = `${window.location.hostname}/Private/Home`;
        }
    },[veri])
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
