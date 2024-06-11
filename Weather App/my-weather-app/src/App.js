import React,{useState , useEffect} from "react";
import './App.css';
import Weather from './components/weather'
function App() {
  const [lat,Setlat]=useState([]);
  const [long,Setlong]=useState([]);
  const [data,Setdata]=useState([]);

  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
  const REACT_APP_API_KEY = 'af8da42b3cc7c1f436d841afead0fe94'
  const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

  useEffect(()=>{
    const fetchData = async() =>{
      navigator.geolocation.getCurrentPosition((position) => {
        Setlat(position.coords.latitude);
        Setlong(position.coords.longitude);
      });
    
    
    await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}&mode=JSON`)
    .then(res => res.json())
    .then(result => {
      Setdata(result)
      console.log(result);
    });
  }
    fetchData();  
  },[lat,long])



  return (
    <div className="App">
      {(typeof data.main != 'undefined')?(
        <Weather weatherdata={data}/>
      ): (
          <div></div>
      )

      }
    </div>
  );
}

export default App;
