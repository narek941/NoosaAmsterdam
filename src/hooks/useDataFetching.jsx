import {useEffect, useState} from 'react';
import axios from 'axios';


const useDataFetching = (url="", load, initialParams={}, startData=[]) => {

  const [firstLoad, setFirstLoad] = useState(load);
  const [data, setData] = useState(startData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {

    try {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }

  };

  useEffect(()=>{
    if(!firstLoad){
      setFirstLoad(true);
      return
    }

    fetchData();
    console.log(data)
  }, [url]);
  
  return {data, error, loading};

};

export default useDataFetching;