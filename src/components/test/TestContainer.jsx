import React, {useState, useEffect} from "react";
import Test from "./Test";
import { Link } from "react-router-dom";
export default function TestContainer(){

    const [universidades, setUniversidades] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
    
        fetch("http://universities.hipolabs.com/search?country=United+States&cant=100", requestOptions)
            .then(response => response.json())
            .then(result => {
                //se ejecutan si salio todo bien
                //console.log(result)
                setUniversidades(result);
            })
            .catch(error => {
                //si hubo un error
                console.log('error', error)
            });


    }, [])

    return(
       <>
            {/*<Link to="/">Ir A HOME</Link>*/}
         <Test universidades={universidades}/>
       </>
    )
}