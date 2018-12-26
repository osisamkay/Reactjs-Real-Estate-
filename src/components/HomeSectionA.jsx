import React from 'react';
import styled from 'styled-components';
import HomeCards from './HomeCards';

const SectionA= styled.div`
  padding: 120px 0;
  h2{
    text-align: center; 
  }

`;

const HomeCardStyles= styled.div`
  
  @media (min-width:768px){
    display:grid;
    grid-template-columns:repeat(3,auto);
    max-width: 1400px;
    margin: 0px auto;
  }
  @media (min-width:1024px){
    width:900px;
  }
  @media (min-width:1440px){
    width:1200px;
  }

`;

const HomeSectionA = ()=>(
  <SectionA>
    <h2>Why We Are The Best</h2>
    <HomeCardStyles>
      <HomeCards image={require('../../assets/buy.png')}>
        <h3>Buying or Selling Made Simple</h3>
        <p>
          Find every home on the market,get your
          home's value value,book showings and even make
          offers all here on our website
      </p>
      </HomeCards>

      <HomeCards image={require('../../assets/track.png')}>
        <h3>Track the Entire Process Online</h3>
        <p>
          stay in loop with weekly updates and 24/7 access to timeline of
          all the details of your transaction and your moves
      </p>
      </HomeCards>

      <HomeCards image={require('../../assets/moving.png')}>
        <h3>Your Very own Moving Concierge</h3>
        <p>
          Buy, sell or Reny with us and get a moving concierge
          to coordinate everything from changing over your utilities
          , finding movers.
      </p>
      </HomeCards>

      <HomeCards image={require('../../assets/recommend.png')}>
        <h3>Highly Recomended</h3>
        <p>
        Usage of the Internet is becoming more common due 
        to rapid advancement of technology and power.
      </p>
      </HomeCards>

      <HomeCards image={require('../../assets/tech.png')}>
        <h3>Technical Skills</h3>
        <p>
        Usage of the Internet is becoming more common due 
        to rapid advancement of technology and power.
      </p>
      </HomeCards>

      <HomeCards image={require('../../assets/positive.png')}>
        <h3>Positive Reviews</h3>
        <p>
        Usage of the Internet is becoming more common due 
        to rapid advancement of technology and power.
      </p>
      </HomeCards>
    </HomeCardStyles>
  </SectionA>

)

export default HomeSectionA;
