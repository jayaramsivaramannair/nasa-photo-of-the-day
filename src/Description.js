import React from "react";
import "./App.css";

function Description({credit, date, title,explanation}) {
    return (
        <div className="photoDescription">
            <p><span>Photo Credit</span> : {credit}</p>
            <p><span>Image Date</span>: {date}</p>
            <p><span>Title</span>: {title}</p>
            <p><span>Explanation</span>: {explanation}</p>
        </div>
    );
}
export default Description;