import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AreaHeader } from './styled'

export default function Header(){

    return(
        
        <AreaHeader>
     <Button className="btn" variant="warning">Sign in</Button>{' '}
     <Button className="btn" variant="warning">Sign up</Button>{' '}
        </AreaHeader>
    );

}