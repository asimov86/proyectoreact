import React from "react";
import {Card} from "react-bootstrap";

export default function Footer(){
    return(

        <Card.Footer className=" mt-5" fixed="bottom">
            <small className="text-muted">©</small>
        </Card.Footer>
    )
}