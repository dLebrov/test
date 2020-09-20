import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import frame1206 from "../../img/Frame1206.svg";
import user from "../../img/user2.svg";
import event1 from "../../img/event1.svg";
import group229 from "../../img/Group229.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 5, offset: 3 }}>
            <div className="footer">
              <div className="element1">
                <NavLink
                  style={{ textDecoration: "none", color: "#007bff" }}
                  to="box"
                >
                  <img src={group229} alt="" />
                </NavLink>
              </div>
              <div className="element2">
                <NavLink
                  style={{ textDecoration: "none", color: "#007bff" }}
                  to="box"
                >
                  <img src={event1} alt="" />
                </NavLink>
              </div>
              <div className="element3">
                <NavLink
                  style={{ textDecoration: "none", color: "#007bff" }}
                  to="box"
                >
                  <img src={frame1206} alt="" />
                </NavLink>
              </div>
              <div className="element3">
                <NavLink
                  style={{ textDecoration: "none", color: "#007bff" }}
                  to="box"
                >
                  <img src={user} alt="" />
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
