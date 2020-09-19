import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return(<>
        <Container>
            <Row>
                <Col lg={{ span: 4, offset: 4 }}>
                    <div className="footer">
                        123
                    </div>
                </Col>
            </Row>
    </Container>
    </>)
}

export default Footer;