import axios from "axios";
import { UserData } from "../../hooks/FirstTimeWebSrn/Websrn";
import { ShowLoader } from '../actions/loader';

export const loginauth = (payload, server) => {
  return async (dispatch) => {
    console.log(payload)
    try {
      // Check the payload.api value
      // console.log('Sending request to:', payload.api);
      //   const url = payload.api;
      console.log(server)
      const createUrl = `${server}`
      dispatch(ShowLoader('1'))
      const res = await axios.post(createUrl, payload);
      console.log(res)
      debugger

      if (res.status === 200) {
        dispatch(ShowLoader('0'))
        console.log('Login successful');
        localStorage.setItem("User_Data", JSON.stringify(res.data));
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          response: res.data.token,
          userdata: res.data
        });
      } else {
        console.error('Unexpected response:', res);
        dispatch({
          type: 'FETCH_DATA_ERROR',
          error: res.status,
          response: res.data
        });

        dispatch({
          type: 'SHOW_MODAL',
          response: res.data,
          status: '404'
        });
      }
    } catch (err) {
      dispatch(ShowLoader('0'))
      debugger
      // console.error('Error during sami:', err.response);


      dispatch({
        type: 'SHOW_MODAL',
        response: err.response.data,
        status: '404'
      });
    }
  };
};

export const checklogin = () => {
  // console.log(UserData.token);
  
  // TODO: Add token validation logic here if needed

  return (dispatch) => {
    dispatch({
      type: 'FETCH_DATA_SUCCESS',
      response: UserData.token,
      userdata: UserData
    });
  };
};


export const Logout = (payload) => {
  return async(dispatch) =>{
      try{
          sessionStorage.clear();
          dispatch({type: 'TOKENNOTVALID' }) 
  }
  catch(err){
      dispatch({type: 'FETCH_DATA_ERROR' , error: 'server error'})
  }
  }
}