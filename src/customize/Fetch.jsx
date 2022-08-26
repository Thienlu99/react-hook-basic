import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "react-moment";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //componentDidMount
  useEffect(() => {
    async function fetchData() {
    setTimeout(() => {
         
      const axios = require("axios").default;

      // Make a request for a user with a given ID
      axios.get(url)
        .then(function (response) {
          // handle success
          let data = response.data;
           console.log(data)
          // data = data.reverse()
          //format Data
          setData(data);
          //set isLoading
          setIsLoading(false);
          setIsError(false);
          // if (data && data.length > 0) {
        
       
          //   data.map((item) => {
          //     item.Date = moment(item.Date).format("DD/MM/YYYY");

          //     setDatacovid(data);
          //     return item;
          //   });
          // }
          // console.log( setDatacovid(data))
          
        
        })
        
        .catch(function (error) {
          // handle error
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        })
        .then(function () {
          // always executed
        });
        
    
    }, 3000);
}
fetchData()
  }, []); //despen

  return (data, isLoading, isError);
}
// const { data: dataCovid, isLoading, isError }
//         = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
export default useFetch;
