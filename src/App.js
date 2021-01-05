import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Description from './Description';
import Photo from './Photo';

function App() {

  const[database, setDatabase] = useState({"copyright":"Jen Scott","date":"2020-11-19","explanation":"Leaving planet Earth for a moment, a SpaceX Falcon 9 rocket arced into the early evening sky last Sunday at 7:27 pm EST from Kennedy Space Center's Launch Complex 39A. This 3 minute 20 second exposure traces the launch streak as seen over watery reflections from Port Canaveral, about 15 miles south of the launch. The rocket carried four astronauts en route to the International Space Station on the first flight of a NASA-certified commercial human spacecraft system. Dubbed Resilience, the astronauts' Crew Dragon spacecraft successfully docked with the orbital outpost one day later, on Monday, November 16. At the conclusion of their six-month stay on the ISS, the Crew-1 astronauts will use their spacecraft to return to Earth. Of course about 9 minutes after launch the Falcon 9 rocket's first stage returned to Earth, landing in the Atlantic Ocean on autonomous spaceport drone ship Just Read The Instructions.","hdurl":"https://apod.nasa.gov/apod/image/2011/spacex-crew-1-JenScottPhotography-11.jpg","media_type":"image","service_version":"v1","title":"Crew-1 Mission Launch Streak","url":"https://apod.nasa.gov/apod/image/2011/spacex-crew-1-JenScottPhotography-11_1050.jpg"});
  
  /*
  /* Makes the request only on initial render */
  /*
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-11-19")
    .then((response) => console.log(response.data));
  }, [])
  */
  
  
  
  //response.data.copyright
  //response.data.date
  //response.data.title
  //response.data.explanation


  return (
    <div className="App">
      <h1 className='header'>NASA Photos - Wonder & Explore!</h1>
      <div>
        <Photo url={database.url} title={database.title}/>
      </div>
      <div className='button'>
        <button>Random Image Generator</button>
      </div>
      <div>
        <Description credit={database.copyright} date={database.date} title={database.title} explanation={database.explanation}/>
      </div>
    </div>
  );
}

export default App;
