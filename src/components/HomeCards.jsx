import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  width: 90%;
  height: 260px;
  margin: 15px auto;
  text-align: center;
  padding: 10px;
  &:hover{
  background-color: #031249;
  box-shadow: -11px 10px 20px #141448;
  color:white;
  transition:.5s;
  
  }
  img{
    width:60px;
    height:50px;
  }
  @media(min-width:1440px){
    height:240px;
  }
`;


const HomeCards = ({children,image}) =>(
  <Cards>
    <img src={image} alt="sectionA cards"/>
    <div>
      {children}
    </div>
  </Cards>

);

export default HomeCards;



