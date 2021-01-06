import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function Explore({date, onChange}) {
    return(
        <div className="calendar">
            <h4>Still Curious!</h4>
            <h4>Rejuvinate Your Sense of Wonder by Selecting A Past Date Below!</h4>
            <h4>Selected Date: <DatePicker showLeadingZeroes={true} format={"y-MM-dd"} selected={date} onChange={onChange}/></h4>
        </div>
    );
}

export default Explore;