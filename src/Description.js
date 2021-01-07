import React from "react";
import "./App.css";
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function Description({credit, date, title,explanation}) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h3">{title}</CardTitle>
                    <CardSubtitle tag="h5">Copyright: {credit}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardSubtitle tag="h5">Date: {date}</CardSubtitle>
                    <CardText tag="p">{explanation}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default Description;