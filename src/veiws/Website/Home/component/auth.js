import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Main } from '../../../../constant';
import CustomForm from '../../../../components/form/form';
import { Box, Card, Typography } from '@mui/material';
import axios from 'axios';
import { loginauth } from '../../../../redux/actions/loginauth';
import { useDispatch } from 'react-redux';

const Auth = (props) => {
    const constantData = Main().Login;
    const dispatch = useDispatch();

    console.log(constantData)
    // debugger
    const [getfilterdata , setGetfilterdata ] = useState(constantData.inputs.filter((item) => item.feildtype !== 'label'));
    const [initialInputValues , setInitialInputValues] = useState(Object.fromEntries(
        getfilterdata
            .map((item) => [item.name, ''])
    ));

    const [inputValues, setInputValues] = useState(initialInputValues);


      function handleInputChange(e) {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
      }
      const myfunc = async(e) =>{
        e.preventDefault();
        await dispatch(loginauth(inputValues,'https://fakestoreapi.com/auth/login'))
      }
  return (
    <div>
        <form onSubmit={myfunc}>
            <Card sx={{p:4, pb: 10 , pt: 5}}>
                <Box sx={{pb:4}}>
                    <Typography variant='h1' textAlign='center'>
                        Logo
                    </Typography>
                </Box>
            <CustomForm data={constantData.inputs} handleInputChange={handleInputChange} />
            </Card>

        </form>
    </div>
  )
}

Auth.propTypes = {}

export default Auth