import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { CustomTable } from '../../../components/table/SimpleTable'
import  CustomTable  from '../../../components/table/SimpleTable'
import { Box, Grid } from '@mui/material';
import StudentReportComponent from '../../../components/report/student';
import { ShowLoader } from '../../../redux/actions/loader';
import CustomForm from '../../../components/form/form';
import { Main } from '../../../constant';
import Auth from './component/auth';

const Home = (props) => {
    const [data , setData ] = useState()
    // const dispatch = useDispatch()
 
    // useEffect(()=>{
    //   console.log('nothing')
    //     dispatch(ShowLoader('1'))
    //     axios.post(url,{},{
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${userToken}`,
    //         },
    //       })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           console.log(res.data);
    //           setData(res.data)
    //           setTimeout(()=>{
    //             dispatch(ShowLoader('0'))
    //           },1000)

    //         }
    //       })
    //       .catch((err) => {
    //         console.error(err); // Log the error response for debugging
    //       });

    // },[])



 

  return (
    <>
    <Box>
        <Grid container minHeight="100vh" alignItems='center' display="flex" justifyContent='center'>
          <Grid item md={4} lg={3} sm={6} xs={12}>
            <Auth />

          </Grid>
         </Grid>
    </Box>
    </>
  )
}

Home.propTypes = {}

export default Home