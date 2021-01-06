import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Description from './Description';
import Photo from './Photo';
import Quotation from './Quotation';
import Explore from './Explore';

const myApiKey = "Z2STqlW4cLLKE802inaTm6UmBb0I6tleu2xo7OWY"

function App() {

  const[database, setDatabase] = useState({"copyright":"Jos\u00e9 Mtanous","date":"2021-01-05","explanation":"What is the Small Magellanic Cloud? It has turned out to be a galaxy.  People who have wondered about this little fuzzy patch in the southern sky included Portuguese navigator Ferdinand Magellan and his crew, who had plenty of time to study the unfamiliar night sky of the south during the first circumnavigation of planet Earth in the early 1500s. As a result, two celestial wonders easily visible for southern hemisphere skygazers are now known in Western culture as the Clouds of Magellan. Within the past 100 years, research has shown that these cosmic clouds are dwarf irregular galaxies, satellites of our larger spiral Milky Way Galaxy. The Small Magellanic Cloud actually spans 15,000 light-years or so and contains several hundred million stars. About 210,000 light-years away in the constellation of the Tucan (Tucana), it is more distant than other known Milky Way satellite galaxies, including the Sagittarius Dwarf galaxy and the Large Magellanic Cloud. This sharp image also includes the foreground globular star cluster 47 Tucanae on the right.","hdurl":"https://apod.nasa.gov/apod/image/2101/SMC_Mtanous_4464.jpg","media_type":"image","service_version":"v1","title":"The Small Cloud of Magellan","url":"https://apod.nasa.gov/apod/image/2101/SMC_Mtanous_960.jpg"});
  const [date, setDate] = useState(new Date());
  
  
  /* Makes the request only on initial render */
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${myApiKey}`)
    .then((response) => {console.log(response); setDatabase(response.data)})
    .catch((error) => console.log(error))
  }, [])

  /* Makes the request only when the date is changed */
  useEffect(() => {
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month =
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const year = date.getFullYear();

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${myApiKey}&date=${year}-${month}-${day}`
      )
      .then((response) => {console.log(response); setDatabase(response.data)})
      .catch((error) => console.log(error))
  }, [date]);

  // media_type: "image" || media_type: "video"
  

  if(!database.url) return <h3>Loading....</h3>
  return (
      <div className="App">
        <h1 className='header'>NASA Photo of the Day - Explore & Wonder!</h1>
        <Quotation />
        <div className="mainContainer">
          <div className="photoContainer">
            <Photo url={database.url} title={database.title}/>
          </div>
          <div>
            <Description credit={database.copyright ? database.copyright : "No Information Available"} date={database.date} title={database.title} explanation={database.explanation}/>
          </div>
        </div>
        <Explore date={date} onChange={(date) => setDate(date)}/>
      </div>
  );
}

export default App;
