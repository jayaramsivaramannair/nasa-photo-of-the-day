import React from "react";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import {CardText, CardTitle, CardBody} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function Explore({date, onChange}) {
    return(
        <Footer>
            <CardBody>
                <CardTitle tag="h5">Still Curious!</CardTitle>
                <CardText tag='p'>Rejuvenate Your Sense of Wonder by Selecting A Past Date Below!</CardText>
                <CardText>Selected Date: <DatePicker showLeadingZeroes={true} format={"y-MM-dd"} selected={date} onChange={onChange}/></CardText>
            </CardBody>
        </Footer>
    );
}

export default Explore;

//Styled Components
const Footer = styled.div`
    background-color: #6a0dad;
    margin: 20px;
    box-shadow: 10px 10px 10px black;
`;