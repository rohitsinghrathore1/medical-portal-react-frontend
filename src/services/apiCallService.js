import config from "../configs/config";
import apiEndPoints from "./apiEndPoints";

const makeApiCall = (reqObj)=>{

  const url = config.baseUrl + apiEndPoints[reqObj.endPoint];
  const requestParams = {
      method: reqObj.method || "GET",
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      credentials: "include"
    };

    if(reqObj.data){
      requestParams.body = JSON.stringify(reqObj.data)
    }
    // mode: 'cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // *manual, follow, error  
 fetch(url, requestParams)
  .then(response => {
      if (response.status>=400) {
        return Promise.reject(response)
      } else {
        return response.json()
      }
    }
  )
  .then(res=>{
    if(res.status === "SUCCESS"){
      reqObj.successCb(res);
    } else {
      reqObj.failureCb(res);
    }
  })
  .catch(error => {
    console.log('api call service error: ', error);
    reqObj.failureCb(error);
  });
}

export default makeApiCall;

