import React from "react";
import "./App.css";

function Photo({url, title}) {
    return (
        <div className="imageContainer">
            <img className="image" src={url} alt={title}/>
        </div>
    );
}

export default Photo;