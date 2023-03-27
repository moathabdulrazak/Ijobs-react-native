
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const rapidApiKey = '8399dbd9b6msh656699dd848aac8p115423jsnd378978f60a6'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const error = useRef(null); 




  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

const fetchData = async () => {
  setIsLoading(true);

  try {
    const response = await axios.request(options);
    setData(response.data.data)
    setIsLoading(false)
  } catch (error) {
    console.log(error)
    alert(error)
  } finally {
setIsLoading(false);
  }
}

}