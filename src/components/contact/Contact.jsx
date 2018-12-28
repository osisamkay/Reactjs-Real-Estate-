import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HomeSectionD from '../HomeSectionD';
import styled from 'styled-components';
import header from '../../../assets/contact.jpeg';

const ContactHeader = styled.div`
  background-color: #126894;
  img{
    width:100%;
    margin-bottom:0px;
  }
  h4 {
    margin: 0px;
    text-align: center;
    background-color: #126894;
    width: 100%;
    font-size: 160%;
    padding: 5px;
    animation: bounce 1400ms both;
  }

  @keyframes bounce {

    from,
    20%,
    53%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0);
    }

    70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0, -4px, 0);
    }
  }
`;

const Contact = () => (
  <div >
    <Navbar />
    <ContactHeader>
      <img src={header} alt=""/>
      <h4>CONTACT US</h4>
    </ContactHeader>
      <HomeSectionD />
    <Footer /> 
  </div>

)

export default Contact;
