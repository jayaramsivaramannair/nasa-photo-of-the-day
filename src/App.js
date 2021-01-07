import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';

import { Container, Row, Col} from 'reactstrap'
import Description from './Description';
import Photo from './Photo';
import Quotation from './Quotation';
import Explore from './Explore';

const myApiKey = "Z2STqlW4cLLKE802inaTm6UmBb0I6tleu2xo7OWY"

const AppContainer = styled.div`
  font-family: 'philosopher', sans-serif;
  color: #760EF4;
  background-color: #FB9C01;
`;



function App() {

  const[database, setDatabase] = useState({});
  const[date, setDate] = useState(new Date());
  
  
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
      <AppContainer>
        <h1 className='header'>NASA Photo of the Day - Explore & Wonder!</h1>
        <Quotation />
        <Container>
          <Row>
            <Col>
              {/*Conditionally renders the element based on the type of media*/}
              {database.media_type === 'video' ? <iframe src={database.url} title={database.title} width={400} height={400} loading={'eager'}></iframe> : <Photo url={database.url} title={database.title}/>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Description credit={database.copyright ? database.copyright : "No Information Available"} date={database.date} title={database.title} explanation={database.explanation}/>
            </Col>
          </Row>
        </Container>
        <Explore date={date} onChange={(date) => setDate(date)}/>
      </AppContainer>
  );
}

export default App;
