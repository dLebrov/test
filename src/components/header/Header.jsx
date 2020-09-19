import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../img/logo.svg";
import enzimo from "../../img/enzimo.svg";
import s from "./Header.module.css";
import magnifier from "../../img/magnifier.svg";

const Header = () => {
    return (<Container fluid> 
            <Row>
                <Col lg={3}>
                    <div className={s.headerLogo}>
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={s.enzimo}>
                            <img src={enzimo} alt=""/>
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 1, offset: 8}}>
                    <div className={s.badges}>
                        <div className={s.magnifier}>
                            <img src={magnifier} alt=""/>
                        </div>
                        <div className={s.quetion}>
                            ?
                        </div>
                    </div>    
                </Col>
            </Row>
        </Container>
    )
}

export default Header;