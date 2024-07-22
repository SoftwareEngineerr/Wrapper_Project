import axios from "axios";

export const GetRequest = (url, header, mytype) => {
  return async (dispatch) => {
    try {
      // Uncomment these lines if you want to show a loader during the request
      // dispatch({ type: "SHOW_LOADER", Seconds: "getdata" });

      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${header}`
        }
      });

      if (res.status === 200) {
        dispatch({
          type: mytype,
          response: res.data,
        });

        // Uncomment these lines if you want to hide the loader after a delay
        // setTimeout(() => {
        //   dispatch({ type: "SHOW_LOADER", Seconds: '0' });
        // }, 1000);
      }
    } catch (err) {
      console.error(err.response); // Log the error response for debugging
      dispatch({
        type: 'SHOW_MODAL',
        response: err.response.data || err.message,
        status: err.response ? err.response.status : '404'
      });

      // Uncomment these lines if you want to hide the loader after an error
      // setTimeout(() => {
      //   dispatch({ type: "SHOW_LOADER", Seconds: '0' });
      // }, 1000);
    }
  };
};
