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
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand" style={{ color: "#09E85E"}}>
            <span style={{ color: "#E8E6E3"}}>Waizbart drone • </span>
            Serviços aéreos
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a style={{ color: "#09E85E"}} href="#pablo" onClick={(e) => e.preventDefault()}>
                  Menu
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/landing-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="tim-icons icon-paper d-lg-none d-xl-none" />
                <b>Serviços</b>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/landing-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="tim-icons icon-image-02 d-lg-none d-xl-none" />
                <b>Portifólio</b>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/register-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="tim-icons icon-chat-33 d-lg-none d-xl-none" />
                <b>Contato</b>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/waizbart.drone"
                rel="noopener noreferrer"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="fab fa-instagram d-lg-none d-xl-none" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
