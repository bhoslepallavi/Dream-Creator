import React from 'react'
import styled from 'styled-components';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
    <div className='footer'>

      <div className='icon'>
      <a href="https:wwww.facebook.com/sanket.jadhav.12979">
      <AiOutlineFacebook size='30px' /> 
      </a>
        <a href="https://www.instagram.com/dreamcreators21">
        <FaInstagramSquare size='30px'/>
        </a>
        
      </div>

      <h1>© Copyrights 2022 - 2023. Dream Creator Event Management.All Rights Reserved.</h1>
      
   
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.footer{
  width: 100% vw;
  height: 80px;
  background-color: #68b6c4;

  h1{
    font-size:15px;
    display:flex;
    justify-content: center;  
    align-items:center;
  }

  .icon{
  display:flex;
  justify-content: center;  
  align-items:center;
  padding: 10px;
  ${'' /* border: 2px solid; */}
  gap: 10px;
  
}

.icon a:hover{
  transform: scale(0.9);
}







` 
export default Footer
