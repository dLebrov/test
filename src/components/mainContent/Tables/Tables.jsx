import React from "react";
import "./Tables.css";
import { Col, Container, Row } from "react-bootstrap";
import table1 from "../../../img/table1.svg";
import table2 from "../../../img/table2.svg";
import table3 from "../../../img/table3.svg";
import table4 from "../../../img/table4.svg";
import table5 from "../../../img/table5.svg";
import table6 from "../../../img/table6.svg";
import table7 from "../../../img/table7.svg";
import table8 from "../../../img/table8.svg";
import table9 from "../../../img/table9.svg";

const Tables = () => {
    return (<>
    <Container fluid>
        <Row>
            <Col lg={4}>
                <div className="mainFlex" id="help">
                    <div>
                        <img src={table1} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Терапевт
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="mainFlex">
                    <div>
                        <img src={table2} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Педиатр
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="mainFlex" id="head">
                    <div>
                        <img className="head" src={table3} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Лор
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Container fluid>
    <Row>
        <Col lg={4}>
            <div className="mainFlex" id="help">
                <div>
                    <img src={table4} alt=""/>
                </div>
                <div>
                    <div className ="title">
                        Фониатор
                    </div>
                    <p>
                        Специалист общего профиля
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className="mainFlex">
                <div>
                    <img src={table5} alt=""/>
                </div>
                <div>
                    <div className ="title">
                        Уролог
                    </div>
                    <p>
                        Специалист общего профиля
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className="mainFlex" id="head">
                <div>
                    <img className="head" src={table6} alt=""/>
                </div>
                <div>
                    <div className ="title">
                        Офтальмолог
                    </div>
                    <p>
                        Специалист общего профиля
                    </p>
                </div>
            </div>
        </Col>
    </Row>
</Container>
<Container fluid>
        <Row>
            <Col lg={4}>
                <div className="mainFlex">
                    <div>
                        <img src={table7} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Гастроэнтеролог
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="mainFlex">
                    <div>
                        <img src={table8} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Невролог
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="mainFlex">
                    <div>
                        <img src={table9} alt=""/>
                    </div>
                    <div>
                        <div className ="title">
                            Стоматолог терапевт
                        </div>
                        <p>
                            Специалист общего профиля
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</>
    )
};

export default Tables;