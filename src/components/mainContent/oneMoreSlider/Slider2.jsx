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


const Slider2 = () => {
    return (<div>
        <Container fluid>
            <Row>
                <Col lg={1}>
                <div className="text">
                    <span>
                        КЛИНИКИ
                    </span>
                </div>
                </Col>
                <Col lg={{span: 3, offset: 8}}>
                <div className="viewAll">
                    <p>
                        Посмотреть все
                    </p>
                    <img src={vector} className="vector" />
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col lg ={4}>
                    <div className="slider-control2">
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
                </Col>
                <Col lg ={4}>
                    <div className="table2" id="table2">
                    <div className="flexHelp">
                            <div className="clinicLogo"><img src={vita} alt=""/></div>
                            <div className="intersect"><img src={Intersect2} alt=""/></div>
                        </div>
                        <div className="clinicName2"><p>МЕДИЦИНСКИЙ ЦЕНТР ВИТА</p></div>
                    </div>
                </Col>
                <Col lg ={4}>
                    <div className="table2" id="table3">
                    <div className="flexHelp">
                            <div className="clinicLogo"><img src={lor} alt=""/></div>
                            <div className="intersect"><img src={Intersect3} alt=""/></div>
                        </div>
                        <div className="clinicName"><p>КЛИНИКА МАРИИ ПОПОВОЙ</p></div>
                    </div>
                    <div className="slider-control">
                        <div className="vector">
                            <div><img src={vector} alt="" /></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default Slider2;