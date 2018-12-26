import React from 'react';
import styled from 'styled-components';

const SectionC = styled.div`
  padding:120px 0;
  @media(min-width:768px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    img{
      height:100%;
    }
  }
  
  .left{
    background-color: #00000cfa;
    padding:10px;
    
    h4{
      color: #126894;
      margin:0px;
      font-size: 25px;
    }
    .about{
      @media(min-width:768px){
        padding: 20px;
        width: 360px;
       margin:auto;
      }
      @media(min-width:1440px){
       margin:auto;
      }
    }

  }
    }
    p{
      color:#b7c2f1;
    };
  }
  .right{
    img{
      width:100%;
    }
  @media(min-width:768px){
    display:grid;
    grid-template-columns:repeat(2,auto);
  }


  
`;


const HomeSectionC=()=>(
  <SectionC>
    <div className="left">
      <div className="about">
        <h4>Why Choose Us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicinglit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna
           aliqua.Ut enim ad minim veniam.
				</p>
      </div>

      <div className="about">
        <h4>Legal Notice</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicinglit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna
           aliqua.Ut enim ad minim veniam.
				</p>
      </div>

      <div className="about">
        <h4>Our Properties</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicinglit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna
           aliqua.Ut enim ad minim veniam.
				</p>
      </div>

    </div>
    <div className="right">
      <img src={require('../../assets/about-img.jpg')} alt="about image"  />
    </div>


  </SectionC>
)

export default HomeSectionC;
