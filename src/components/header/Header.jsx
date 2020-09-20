import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../img/logo.svg";
import enzimo from "../../img/enzimo.svg";
import s from "./Header.module.css";
import magnifier from "../../img/magnifier.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (<Container fluid> 
            <Row>
                <Col lg={3} md={3} sm={3} xs={3}>
                    <div className={s.headerLogo}>
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={s.enzimo}>
                            <img src={enzimo} alt=""/>
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 2, offset: 7}} md={{span:2, offset: 7}} sm={{span:2, offset: 7}} xs={{span:2, offset: 7}}>
                    
                        <div className={s.badges}>
                            <NavLink to="box">
                            <div className={s.magnifier}>
                                
                                    <img src={magnifier} alt=""/>
                                
                            </div>
                            </NavLink>
                            <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                                <div className={s.quetion}>   
                                        ? 
                                </div>
                            </NavLink>
                        </div>   
                </Col>
            </Row>
        </Container>
    )
}

export default Header;