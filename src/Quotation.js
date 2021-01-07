import React from "react";
import { Card, CardText, CardBody} from 'reactstrap';
import "./App.css";

function Quotation() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText tag="p">
                        "If the stars should appear one night in a thousand years, how would men believe and adore; and preserve for many generations the remembrance of the city of God which had been shown! 
                        But every night come out these envoys of beauty, and light the universe with their admonishing smile."
                    </CardText>
                    <CardText tag="h6">
                        —Ralph Waldo Emerson, Nature and Selected Essays
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default Quotation;