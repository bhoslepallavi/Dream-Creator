import React from "react";
import { Button } from "./Scrap/Style/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slider from "./Scrap/Slider/Slider";


const Home = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first-section">
          <h1 className="main-heading">memories matter</h1>

          <h2 className="scecond-heading">
            We Will Make Your Event Unforgotable
          </h2>

          <Button className="btn">
            <NavLink to="/contact"> Enquiry Now</NavLink>
          </Button>
        </div>

        <div className="second-section">
          <Slider />
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
    ${
      "" /* display: flex;
justify-content: center;
align-items:center; */
    }
    grid-template-columns: repeat(2, 1fr);
    ${"" /* grid-template-rows: 1fr; */}
    padding-top: 40px;
    width: 95% vw;
    height: 450px;
    background-color: #eeeb76;
    text-align: center;

    .first-section {
      padding: 30px;
    }
  }

  .main-heading {
    font-size: 40px;
    text-transform: uppercase;
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 20px;
    font-family: "Poppins", sans-serif;
  }

  .scecond-heading {
    justify-content: center;
    display: flex;
    font-family: "Ms Madi", cursive;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
  }
`;

export default Home;
