import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "react-moment";
function CovidTable(props) {
  const [dataCovid, setDatacovid] = useState([]);
  const [loading, setLoading] = useState(true)
  //componentDidMount
  useEffect(() => {
    setTimeout(async () => {
    const axios = require("axios").default;

    // Make a request for a user with a given ID
    axios
      .get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
      )
      .then(function (response) {
        // handle success
        let data = response.data;
        data = data.reverse()
        //format Data
        setDatacovid(data)
        //set loading
        setLoading(false);
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
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
    }, 3000)
  }, []); //despen
  return (
    <div>
      <table>
        {console.log("checkData>>>", dataCovid)}
        <thead>
          <tr>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>

        <tbody>
          {loading === false && dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
            {loading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }
          {/* <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Mexico</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default CovidTable;
