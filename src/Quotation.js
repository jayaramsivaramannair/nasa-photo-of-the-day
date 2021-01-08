import React from "react";
import {CardText, CardBody} from 'reactstrap';
import styled from 'styled-components';
import "./App.css";

//Styled Components
const QuoteContainer = styled.div`
    background : #6a0dad;
    font-size: 12px;
    margin: 10px;
    box-shadow: 10px 10px 10px black;
`;

function Quotation() {
    return (
        <QuoteContainer>
            <CardBody>
                <CardText tag="p">
                    "If the stars should appear one night in a thousand years, how would men believe and adore; and preserve for many generations the remembrance of the city of God which had been shown! 
                    But every night come out these envoys of beauty, and light the universe with their admonishing smile."
                </CardText>
                <CardText tag="h6">
                    —Ralph Waldo Emerson, Nature and Selected Essays
                </CardText>
            </CardBody>
        </QuoteContainer>
    );
}
export default Quotation;