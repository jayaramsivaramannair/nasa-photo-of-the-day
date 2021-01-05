import React from "react";
import "./App.css";

function Description({credit, date, title,explanation}) {
    return (
        <div className="photoDescription">
            <p><em>Photo Credit</em> : {credit}</p>
            <p><em>Image Date</em>: {date}</p>
            <p><em>Title</em>: {title}</p>
            <p><em>Explanation</em>: {explanation}</p>
        </div>
    );
}
export default Description;