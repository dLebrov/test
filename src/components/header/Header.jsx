import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../img/logo.png";
import enzimo from "../../img/enzimo.png";
import s from "./Header.module.css";
import magnifier from "../../img/magnifier.png";
import quetion from "../../img/quetion.png";

const Header = () => {
    return (<Container fluid> 
            <Row>
                <Col lg={2} >
                    <div className={s.headerLogo}>
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={s.enzimo}>
                            <img src={enzimo} alt=""/>
                        </div>
                    </div>
                </Col>
                <Col lg={9}></Col>
                <Col lg={1}>
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