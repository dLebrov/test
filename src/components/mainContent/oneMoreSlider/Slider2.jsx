import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Slider2.css";
import vector from "../../../img/vector.svg";
import pop from "../../../img/pop.svg";
import Intersect from "../../../img/Intersect.svg";
import Intersect2 from "../../../img/Intersect(1).svg";
import Intersect3 from "../../../img/Intersect(2).svg";
import vita from "../../../img/vita.svg";
import lor from "../../../img/lor.svg";
import vectoReverse from "../../../img/vectoReverse.svg";
import { NavLink } from "react-router-dom";

const Slider2 = () => {

    return (<div>
        <Container fluid>
            <Row>
                <Col lg={3} md={3} sm={3} xs={3}>
                <div className="text">
                    <span>
                        КЛИНИКИ
                    </span>
                </div>
                </Col>
                <Col lg={{span: 3, offset: 6}} md={{span: 4, offset: 5}} sm={{span: 4, offset: 5}} xs={{span: 4, offset: 5}}>
                <div className="viewAll">
                <NavLink
              style={{ textDecoration: "none", color: "#007bff" }}
              to="box"
            >
                    <p>
                        Посмотреть все
                    </p>
                    </NavLink>
                    <img src={vector} className="vector" />
                    
                </div>
                
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col lg={4} md={4} sm={12} ><NavLink
              style={{ textDecoration: "none", color: "#007bff" }}
              to="box"
            >
                    <div className="slider-control3">
                        <div className="vector">
                            <div><img src={vectoReverse} alt="" /></div>
                        </div>
                    </div>
                    <div className="table2" id="table1">
                        <div className="flexHelp">
                            <div className="clinicLogo"><img src={pop} alt=""/></div>
                            <div className="intersect"><img src={Intersect} alt=""/></div>
                        </div>
                        <div className="clinicName"><p>КЛИНИКА МАРИИ ПОПОВОЙ</p></div>
                    </div>
                    </NavLink></Col>
                <Col lg ={4} md={4} sm={12}><NavLink
              style={{ textDecoration: "none", color: "#007bff" }}
              to="box"
            >
                    <div className="table2" id="table2">
                    <div className="flexHelp">
                            <div className="clinicLogo"><img src={vita} alt=""/></div>
                            <div className="intersect"><img src={Intersect2} alt=""/></div>
                        </div>
                        <div className="clinicName2"><p>МЕДИЦИНСКИЙ ЦЕНТР ВИТА</p></div>
                    </div>
                    </NavLink></Col>
                <Col lg ={4} md={4} sm={12}><NavLink
              style={{ textDecoration: "none", color: "#007bff" }}
              to="box"
            >
                    <div className="table2" id="table3">
                    <div className="flexHelp">
                            <div className="clinicLogo"><img src={lor} alt=""/></div>
                            <div className="intersect"><img src={Intersect3} alt=""/></div>
                        </div>
                        <div className="clinicName"><p>ЛОР КЛИНИКА</p></div>
                    </div>
                    <div className="slider-control2">
                        <div className="vector">
                            <div><img src={vector} alt="" /></div>
                        </div>
                    </div>
                    </NavLink></Col>
            </Row>
        </Container>
        
                    
    </div>)
}

export default Slider2;