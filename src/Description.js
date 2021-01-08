import React from "react";
import "./App.css";
import styled from 'styled-components';
import {CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function Description({credit, date, title,explanation}) {
    return (
        <DescriptionContainer>
            <CardBody>
                <CardTitle tag="h3">{title}</CardTitle>
                <CardSubtitle tag="h5">Copyright: {credit}</CardSubtitle>
            </CardBody>
            <CardBody>
                <CardSubtitle tag="h5">Date: {date}</CardSubtitle>
                <CardText tag="p">{explanation}</CardText>
            </CardBody>
        </DescriptionContainer>
    );
}
export default Description;

//Styled Components
const DescriptionContainer = styled.div`
    background-color: #6a0dad;
    font-size: 15px;
    box-shadow: 10px 10px 10px black;
`;