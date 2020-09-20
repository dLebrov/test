import React from "react";
import { Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const StubLink = () => {

    return(<div>
        <h1>ВАУ, ССЫЛКА РАБОТАЕТ!</h1><NavLink to="/" 
        style={{textDecoration: 'none', color:'#007bff'}}> <Button> <p style={{color:'#fff'}}>вернуться назад</p> </Button></NavLink>
    </div>)
}

export default StubLink;