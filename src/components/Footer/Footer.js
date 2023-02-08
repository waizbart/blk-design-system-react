/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className="footer" style={{
      borderColor: "#09E85E",
      background: "#171941",
    }}>
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Waizbart Drones</h1>
          </Col>
          <Col md="6">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link} onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo(1100)
                }}>
                  Serviços
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link} onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollTo(3320)
                }}>
                  Contato
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Siga-nos:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/creativetim"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Siga-nos
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/creativetim"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Curta
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://dribbble.com/creativetim"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Siga-nos
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
