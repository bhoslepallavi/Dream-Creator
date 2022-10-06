import React from "react";
import Btn from "../../../Component/Btn";
// import { NavLink } from 'react-router-dom';
import "./Home.css";
// import Slider from './Slider';
import HeroSlider, { Slide } from "hero-slider";

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid className="homeContainer">
        <div className="imgHome">
          <img src="./images/img/img3.jpg" alt="" />
        </div>

        <Row className="headerRow">
          <Col className="containerHome">
            <div className="textHome">
              <h1>memories matter</h1>
              <p>We Will Make Your Event Unforgtable</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="btnsection">
            <Btn />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
