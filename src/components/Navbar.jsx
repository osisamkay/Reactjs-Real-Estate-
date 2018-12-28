import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-via-logohub.png';
import styled from 'styled-components';
import Navlogo from '../../assets/iconfinder_menu-alt_134216.png';

const Nav = styled.div`
  
  a img{
    width: 200px;
    height: 30px;
    float: left;
    padding: 5px;
  }

  img{
    height:40px;
    float: right;
    padding: 6px;
  }
  .collapse::after{
    content:'';
    clear:both;
    display:table;

  }

  .navlinks a{
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 15px;
    padding: 5px;
    background-color: #b7c2f1;
    color: #293064;
    animation: fadeInLeft 1000ms both;
    &:nth-child(even){
      background: #293064;
      color: #b7c2f1;
    }
    
  }
  .rm-navlinks{
    display:none;
  }


  @media (min-width:768px){
    .nav_respond{
      display:none;
    }
    
  }
  @keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

`;

const Navgroup = styled.nav`
  display:none

  @media (min-width:768px){
    padding: 20px 0;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    width:100%;
  }

  a {
    font-weight: bolder;
    font-size: 18px;
    color: #293064;
  }

  a button {
    height: 35px;
    width: 116px;
    background-color: #031249;
    color: #b7c2f1;
    border: 0;
    border-radius: 0.5em;
    font-size: inherit;
  }
  .logo2{
    height:40px;
  }
`; 



class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }
  render(){
    return(
      <Nav>
        <div className="nav_respond">
          <div className="collapse">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <img src={Navlogo} alt="NavIcon" onClick={ this.handleClick } />
          </div>
          <div className={ this.state.condition ? "navlinks" : "rm-navlinks" } >
            <Link to="/">Home</Link>
            <Link to="/Listings">Listings</Link>
            <Link to="/Sellpage">Sell</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/sign">Sign in</Link>
          </div>
        </div>
        <Navgroup>
          <Link to="/"><img src={Logo} className='logo2' alt="logo" /></Link>
          <Link to="/Listings">Listings</Link>
          <Link to="/Sellpage">Sell</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/sign">
            <button>Sign in</button>
          </Link>
        </Navgroup>
      </Nav>
    )
  }
  
};

export default Navbar;
