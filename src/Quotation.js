import React from "react";
import "./App.css";

function Quotation() {
    return (
        <div className="quote">
            <figure>
                <blockquote cite="https://sites.uni.edu/morgans/astro/course/nightfall.pdf">
                    <p>"If the stars should appear one night in a thousand years, how would men believe and adore; and preserve for many generations the remembrance of the city of God which had been shown! 
                        But every night come out these envoys of beauty, and light the universe with their admonishing smile."</p>
                    <p>—Ralph Waldo Emerson, Nature and Selected Essays</p>
                </blockquote>
            </figure>
        </div>
    );
}
export default Quotation;