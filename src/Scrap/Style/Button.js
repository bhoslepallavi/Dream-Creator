import styled from "styled-components";

export const Button = styled.button`

text-decoration: none;
background-color: #e03858;
padding: 15px 20px;
border: none;
text-transform: uppercase;
cursor: pointer;
transition: all 0.3s ease;
border-radius: 20px;
font-family: 'Work Sans', sans-serif;
text-align: center;
max-width: auto;

&:hover, &:active{
    transform: scale(0.98);
    background-color: #c30d30;
}

a{
    text-decoration: none;
    font-size: 13px;
    color: black;
    font-weight: bold;  
}




`