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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

import './styles.css';


const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

export default function ProfilePage() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <h1 className="text-center" style={{ marginBottom: 100, fontWeight: "bold" }}>O que fazemos?</h1>
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Inspeções</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                O drone é uma ferramenta poderosa para inspeção, capturando uma visão aérea de alta resolução com segurança e facilidade. Sendo possível gerar relatórios detalhados de perda térmica, rachaduras, possíveis infiltrações, mau isolamento térmico e muito mais.
                </p>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Investigação particular</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Usando tecnologias de Inteligência Artificial e Visão Computacional, o drone é capaz de reconhecer e identificar pessoas, veículos e objetos. Com isso, é possível realizar investigações particulares e vigilâncias de forma rápida e segura. 
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
            <Col md="5">
                <h1 className="profile-title text-left">Acompanhamento de obras</h1>
                <h5 className="text-on-back">03</h5>
                <p className="profile-description text-left">
                  O drone é uma ferramenta poderosa para inspeção, capturando uma visão aérea de alta resolução com segurança e facilidade, economizando tempo e dinheiro.
                </p>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Mapeamento 3D</h1>
                <h5 className="text-on-back">04</h5>
                <p className="profile-description text-left">
                  Utilizando tecnologia de ponta e softwares de mapeamento 3D, o drone é capaz de gerar mapas de alta resolução, com precisão de centímetros, em tempo real. Com isso, é possível mapear estruturas no mundo real, como edifícios, casas, terrenos, etc.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contato</h1>
                    
                    <h5 className="text-on-back"><i className="tim-icons icon-send" /></h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Seu nome</label>
                            <Input placeholder="Nome" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Endereço de email</label>
                            <Input placeholder="email@email.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input placeholder="(11) 99999-9999" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Empresa</label>
                            <Input placeholder="Nome da empresa" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Mensagem</label>
                            <Input defaultValue="Olá! Preciso de serviços de drone com IA." type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        style={{
                          color: "#09E85E",
                        }}
                      >
                        Enviar
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Estamos ansiosos pelo seu contato
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin verde" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Encontre-nos no escritório</h4>
                    <p>
                      Rua Cananeia, 100, <br />
                      Jardim Leocádia, <br />
                      Sorocaba - SP
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile verde" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ligações ou WhatsApp</h4>
                    <p>
                      Guilherme Waizbart <br />
                      +55 14 99758-5384 <br />
                      Seg - Sex, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
