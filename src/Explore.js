import React from "react";
import DatePicker from "react-datepicker";
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function Explore({date, onChange}) {
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Still Curious!</CardTitle>
                    <CardText tag='p'>Rejuvinate Your Sense of Wonder by Selecting A Past Date Below!</CardText>
                    <CardText>Selected Date: <DatePicker showLeadingZeroes={true} format={"y-MM-dd"} selected={date} onChange={onChange}/></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Explore;