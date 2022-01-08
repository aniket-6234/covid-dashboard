import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [data, setData] = useState();

  useEffect(() => {

    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '21d65a5c87mshd7a56e79ec0552ap1988a3jsn0c5fe959e062'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data);
      console.log(data?.response[202]);
    }).catch(function (error) {
      console.error(error);
    });
  }, [data])
  
  


  return (
    <div className="App">
       <Header />
       <Main data={data}/>
    </div>
  );
}

export default App;
