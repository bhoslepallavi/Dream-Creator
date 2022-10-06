import React from 'react';
// import { silderData } from './Slider-data';
import './Slider.css';
// import {AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';


const Slider = () => {
  return (
    <Wrapper >
    <div className='slider'>
      {/* <AiOutlineArrowLeft className='arrow prev'/> 
      <AiOutlineArrowRight className='arrow next'/>  */}
      
    </div>
    </Wrapper>
  );

};

const Wrapper = styled.section`
  h1{
    font-size: 50px;
  }

  .slider{
    widhth: 40%;
    height: 400px;
    background-image: url("images/img/img1.jpg");
    background-size: 100% 100%;
    padding: 10px;
    animation: changeslider 10s linear infinite;
    border-radius: 10%;
    box-shadow: -25px -20px 17px -11px rgba(0,0,0,0.75);
    margin-right: 50px;
    
  }

  @keyframes changeslider{
    0%{
      background-image: url("images/img/img1.jpg");
    }
    25%{
      background-image: url("images/img/img2.jpg");
    }
    50%{
      background-image: url("images/img/img3.jpg");
    }
    75%{
      background-image: url("images/img/img4.jpg");
    }
    100%{
      background-image: url("images/img/img1.jpg");
    }

    


  }
    
  `

export default Slider