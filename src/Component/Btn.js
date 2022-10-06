import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Btn = () => {
  return (
        <Wrapper>

        <NavLink to="contact"> 
           <h1>Enquiry Now</h1>
        
        </NavLink>

         </Wrapper>
            
        
  
  );
};

const Wrapper = styled.section`
h1{
    font-size: 20px;
    padding: 11px 20px;
    border: 1px black;
    background-color:  #cf0d20;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
}

a {
    text-decoration: none !important;
    color: black;
    

}

h1:hover{
  transform: scale(0.97);
  background-color: #b3202e;
}


`

export default Btn