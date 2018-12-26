import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';


const SellpageStyle = styled.div`
  width:90%;
  margin:0px auto;
  padding-top:120px;
`;

const SellGroup = styled.div`
  @media(min-width:1024px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .sellLeft{
    text-align:center;
    img{
      width:100%;
      border-radius: 1em;
    }
    
   
  }
  .sellRight{
    display:block;
    background-color: #126894;
    text-align:center;
    border-radius:0.5em;
    @media(min-width:1440px){
      height:fit-content;
      margin:auto 0px;
    }
    form {
      padding: 10px;
      @media(min-width:768px){
        display:grid;
        grid-template-columns:1fr 1fr;
        height:fit-content;
        align-items: center;
      }
      
    }
    .formInput{
      margin:10px 0;
      display:block;
    }
    input {
      width: 90%;
      height: 35px;
      border-radius: 0.1em;
    }
    select{
      width:80%;
    }
    .info{
      display:block;
      .Area{
        width:80%;
      }
      @media(min-width:768px){
        display:grid;
        grid-template-columns:1fr 1fr;
        
      }
    }
    
    .item{
      margin:10px 0;
    }
    textarea{
      width:90%;
    }
    .btn{
      text-align:center;
    }
    button{
      height: 45px;
      width: 192px;
      border: 0;
      border-radius: 0.5em;
      font-size: larger;
      padding: -23px; 
      background-color: #031249;
      color: #b7c2f1;
    }
    label{
      display:block;
    }
    
  }
  
`;

class Sellpage extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Summary: "",
      icon: [{}],
      Bedrooms: "",
      Asking: 0,
      Bathrooms: " ",
      Area: 0,
      Phone: "",
      Tag: " ",
      DateListed:" "
    };
    // this.NewListing = this.NewListing.bind(this);
    // this.Name = this.Name.bind(this);
    // this.inputSummary = this.inputSummary.bind(this);
    // this.inputNumber = this.inputNumber.bind(this);
    // this.inputIcon = this.inputIcon.bind(this);
    // this.inputAsk = this.inputAsk.bind(this);
    // this.inputBed = this.inputBed.bind(this);
    // this.inputBath = this.inputBath.bind(this);
    // this.inputArea = this.inputArea.bind(this);
    // this.inputTag = this.inputTag.bind(this);
    // this.inputDate = this.inputDate.bind(this);
    
  }
  NewListing(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings`,
      headers: {Authorization: `Bearer keyRMRWZ0xrBXA8Yv`},
      data: {
        fields: {
          Name: this.state.Name,
          Summary:this.state.Summary,
          // icon: [{}],
          Bedrooms:this.state.Bedrooms,
          Asking:Number(this.state.Asking) ,
          Bathrooms: this.state.Bathrooms,
          Area: Number(this.state.Area),
          Phone: Number(this.state.Phone),
          Tag: this.state.tag,
          DateListed:this.state.DateListed
        }
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  inputName(event) {
    this.setState({
      Name: event.target.value,
    })
  }
  inputSummary(event) {
    this.setState({
      Summary: event.target.value,
    })
  }

  inputNumber(event) {
    this.setState({
      Phone: event.target.value,
    })
  }
  inputIcon(event) {
    this.setState({
      icon: event.target.value,
    })
  }
  inputBed(event) {
    this.setState({
      Bedrooms: event.target.value,
    })
  }
  inputBath(event) {
    this.setState({
      Bathrooms: event.target.value,
    })
  }
  inputArea(event) {
    this.setState({
      Area: event.target.value,
    })
  }
  inputTag(event) {
    this.setState({
      Tag: event.target.value,
    })
  }
  inputDate(event) {
    this.setState({
      DateListed: event.target.value,
    })
  }
  inputAsk(event) {
    this.setState({
      Asking: event.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <SellpageStyle>
          <SellGroup>
            <div className="sellLeft">
              <img src={require('../../../assets/pexels-photo-955793.jpeg')} alt="sellpage" />
          </div>
            <div className="sellRight">
              <form action="post" onSubmit={this.NewListing.bind(this)}>

                <div className="formInput">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" name="Name"  />
                </div>

                <div className="formInput">
                  <label htmlFor="Email">Email:</label>
                  <input type="email" name="Email"  />
                </div>

                <div className="formInput">
                  <label htmlFor="Number">Number:</label>
                  <input type="number" name="Number" onChange={this.inputNumber.bind(this)} />
                </div>

                <div className="formInput">
                  <label htmlFor="Address">Location:</label>
                  <input type="text" name="Address" onChange={this.inputName.bind(this)} />
                </div>

                <div className="info formInput">
                  <div className="item">
                    <label htmlFor="Area">Area:</label>
                    <input className='Area' type="text" name="area" onChange={this.inputArea.bind(this)} />
                  </div>
                  <div className="item">
                    <label htmlFor="Type">Type</label>
                    <select name="Type" onChange={this.inputTag.bind(this)}>
                      <option data-display="Type of property">Type of property</option>
                      <option value="type1">Duplex</option>
                      <option value="type2">semi-detached</option>
                      <option value="type3">Cottage</option>
                      <option value="type4">Central-passage house</option>
                      <option value="type5">Courtyard house </option>
                    </select>
                  </div>
                  <div className="bed item">
                    <label htmlFor="Bedroom">Bedroom(s):</label>
                    <select name="Bedroom" onChange={this.inputBed.bind(this)} >
                      <option data-display="Bedroom">Bedroom</option>
                      o<option value="1"> 1BR</option>
                      <option value="2"> 2BR</option>
                      <option value="3">3BR</option>
                      <option value="4">4BR</option>
                      <option value="5">5BR</option>
                    </select>
                  </div>
                  <div className="bath item">
                    <label htmlFor="Bedroom">Bathroom(s):</label>
                    <select name="Bathroom"onChange={this.inputBath.bind(this)} >
                      <option data-display="Bathroom">Bathroom</option>
                      o<option value="1"> 1BA</option>
                      <option value="2"> 2BA</option>
                      <option value="3">3BA</option>
                      <option value="4">4BA</option>
                      <option value="5">5BA</option>
                    </select>
                  </div>
                </div>

                <div className="formInput">
                  <label htmlFor="Date">Date:</label>
                  <input type="date" name="Date" onChange={this.inputDate.bind(this)} />
                </div>

                <div className="formInput">
                  <label htmlFor="Price">Asking Price(₦):</label>
                  <input type="text" name="Price" onChange={this.inputAsk.bind(this)}  />
                </div>

                <div className="formInput">
                  <label htmlFor="Summary">Summary:</label>
                  <textarea name="Summary" cols="30" rows="10" onChange={this.inputSummary.bind(this)} ></textarea>
                </div>

                <div className="formInput">
                  <label htmlFor="Upload">Send us a pic:</label>
                  <input type="file" name="Upload" onChange={this.inputIcon.bind(this)}  />
                </div>
      
                <div className='btn'> <button type="submit" >Submit</button> </div>
              </form>
            </div>
          </SellGroup>
        </SellpageStyle>
        <Footer />
      </Fragment>
    )
  }
}

export default  Sellpage;
