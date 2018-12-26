import React from 'react';
import styled from 'styled-components';
import HomeSectionBCard from './HomeSectionBCard';

const SectionB=styled.div`
  background-color:#b7c2f1;
  padding:50px 0;
  h2{
    text-align:center;
  }
`;

const HomecardStyles = styled.div`
  
  h3 .span1{
    float:left;
  }

  h3 .span2{
    float:right;
  }
  h3::after{
    content:'';
    clear:both;
    display:table;
  }

  ul{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
    justify-items: center;
    
  }
  @media(min-width:768px){
    display:grid;
    grid-template-columns:repeat(3,1fr);
  }

  @media(min-width:1024px){
    width:900px;
    margin:0px auto;
  }
  @media(min-width:1440px){
    width:1300px;
    margin:0px auto;
  }
`;

const HomeSectionB = ()=>(
  <div>
    <SectionB>
      <h2>Our Top Rated Properties</h2>
      <HomecardStyles>
        <HomeSectionBCard image={require('../../assets/s3.jpg')}>
          <h3> <span className='span1'>Bedroom Duplex</span> <span className='span2'>$3.0M</span></h3>
          <ul>
            <li>Bed: 04</li>
            <li>Bath: 02</li>
            <li>Area: 750sqm</li>
            <li>Internet: No</li>
            <li>Cleaning: No</li>
            <li>Pool: Yes</li>
          </ul>
        </HomeSectionBCard>

        <HomeSectionBCard image={require('../../assets/s1.jpg')}>
          <h3> <span className='span1'>Bedroom Duplex</span> <span className='span2'>$2.5M</span></h3>
          <ul>
            <li>Bed: 02</li>
            <li>Bath: 01</li>
            <li>Area: 750sqm</li>
            <li>Internet: No</li>
            <li>Cleaning: Yes</li>
            <li>Pool: Yes</li>
          </ul>
        </HomeSectionBCard>

        <HomeSectionBCard image={require('../../assets/s2.jpg')}>
          <h3> <span className='span1'>Bedroom Duplex</span> <span className='span2'>$4.5M</span></h3>
          <ul>
            <li>Bed: 05</li>
            <li>Bath: 02</li>
            <li>Area: 750sqm</li>
            <li>Internet: Yes</li>
            <li>Cleaning: No</li>
            <li>Pool: Yes</li>
          </ul>
        </HomeSectionBCard>
      </HomecardStyles>
    </SectionB>
  </div>

)

export default HomeSectionB;
