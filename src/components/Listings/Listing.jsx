import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';Footer
import Footer from '../Footer';
import styled from 'styled-components';
import ListItems from './ListItems';
import axios from 'axios';
import Loader from '../../../assets/loader.gif';

const List= styled.div`
  padding:50px 0;
  .listgroup{
    width:90%;
    margin: 0px auto;
  }
  .listLeft{
    text-align:center;
    @media (min-width: 1024px){
      height: 515px;
    }
  }
  input{
    width: 239px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding:10px;
    @media (min-width:425px){
      width: 315px;
    }
    @media (min-width: 768px){
      width: 425px;
    }
    @media (min-width: 1024px){
      width: 280px;
    }
  }

  select{
    border-radius: 0.4em;
    width: 239px;
    height: 30px;
    border: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width:425px){
      width: 315px;
    }
    @media (min-width: 768px){
    width: 425px;
    }
    @media (min-width: 1024px){
      width: 280px;
    }
  }
  .propt_btn{
    height: 45px;
    width: 192px;
    border: 0;
    border-radius: 0.5em;
    font-size: larger;
    padding: -23px; 
    background-color: #031249;
    color: #b7c2f1;
  }

  @media (min-width: 1024px){
    .listgroup{
      display:grid;
      grid-template-columns:1fr 3fr;
    }
    
    .listLeft{
      height:auto;
      width:300px;
      padding:15px 0;
      background-color: #b7c2f1;
      border-radius: 0.4em;
      border-bottom-left-radius: 0.4em;
      @media (min-width: 1024px){
        height:515px;
      }
    }
    
    .listRight{
      height:auto;
    }
    
  }
  
`;
const ListRight=styled.div`
  @media (min-width: 768px){
    display:grid;
    grid-template-columns:1fr 1fr;
  }
  .Image {
    width: 100%;
    margin: 0px auto;
  }
  @media (min-width: 1440px){
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
  }

`;

const Info = styled.div`
  @media (min-width: 375px){
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
  }
`;

class Listing extends Component {
  
  constructor() {
    super();
    this.state = {
      lists: [],
      ready: 'initial',
    };
  }
    componentDidMount() {
      this.setState({
        ready: 'loading',
      });
      axios({
        method: 'get',
        url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings`,
        headers: {Authorization: `Bearer keyRMRWZ0xrBXA8Yv`},
        
      }).then(({ data: { records } }) => {
        console.log(records);
        this.setState({
          ready: 'loaded',
          lists: records,
        })
      })
    }
  
  render() {
    const { lists, ready } = this.state;
    return (
      <div>
        <Navbar />
        <List>
          <div className="listgroup">
            <div className="listLeft">
              <h3>Filter</h3>
              <form>
                <input type="search" name="search" placeholder='Location' />
                <div className="Property">
                  <select name="property-type" className="app-select" required>
                    <option data-display="Property Type">Property Type</option>
                    <option value="1">Property type 1</option>
                    <option value="2">Property type 2</option>
                    <option value="3">Property type 3</option>
                  </select>
                </div>
                <div className="bedrooms">
                  <select name="bedroom" className="app-select" required>
                    <option data-display="Bedrooms">Bedrooms</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="PriceRange">
                  <input type="text" id="range" name="range" placeholder='Price Range' />
                </div>
                <div className="AreaRange">
                  <input type="text" id="range2" name="range" placeholder='Area Range' />
                </div>
                <div className="button">
                  <button className='propt_btn'>Search Properties</button>
                </div>
              </form>
            </div>
            <ListRight>
            { lists.length ? '' : 'There are no list items'  }
              { ready === 'loading' ? (<img src={Loader} className='Image' alt="loader"/>) : '' }
              { lists.map(list => (
                <div key={list.id}>
                  <Link to={`/Listview/${list.id}`}>
                    <ListItems image={list.fields.icon ? list.fields.icon[0].url : ''} >
                      <h4>{list.fields.Asking}</h4>
                      <h5><Link to={`/Listview/${list.id}`}>{list.fields.Name}</Link></h5>
                      <Info>
                        <h6>Bedrooms: {list.fields.Bedrooms}</h6>
                        <h6>Bathrooms: {list.fields.Bathrooms}</h6>
                        <h6>Area: {list.fields.Area}</h6>
                        <h6>Status: {list.fields.Status}</h6>
                      </Info>
                    </ListItems>
                  </Link>
                </div>
              )) }
            </ListRight>
          </div>
        </List>
        <Footer />
      </div>
    )
  }
}
export default Listing;
