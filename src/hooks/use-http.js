import { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const sendRequest = async (inUrl, inBody) => {
    setIsLoading(true);
    setError(null);
    try{
      console.log("body_field",requestConfig.body);
      const response = await fetch(
        requestConfig.url==null ? inUrl : requestConfig.url,{
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body == null? JSON.stringify(inBody): null
        }
      );
      if(!response.ok){
        throw new Error('Request failed!');
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;