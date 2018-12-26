import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Loader from '../../../assets/loader.gif';


const Liststyle = styled.div`
  width:90%;
  padding-top:120px;
  margin:0px auto;
  img{
    width:100%;
  }
  .viewright{
    text-align:justified;
    h5{
      background-color:#b7c2f1;
      padding:20px;
    }
  }
  .btn{
    text-align:center;
  }
  input[type="button"] {
    height: 45px;
    width: 192px;
    border: 0;
    border-radius: 0.5em;
    font-size: larger;
    padding: -23px;
    background-color: #031249;
    color: #b7c2f1;
  }
  .Image {
    width: 25%;
    margin: 0px auto;
    position: relative;
    left: 37%;
  }
`;

const Info = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  justify-items: center;
`;

const Listgroup = styled.div`
@media (min-width: 1024px){
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
  }
`;



class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      ready: 'initial',
    }
  }
  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings/${id}`,
      headers: {Authorization: `Bearer keyRMRWZ0xrBXA8Yv`},
    }).then(({ data}) => {
      console.log(data.fields.Tag)
      this.setState({
        list: data,
        ready: 'loaded',
      });
    });
  }
  render() {
    const { list,ready } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Liststyle>
          {ready === 'loading' ? (<img src={Loader} className='Image' alt="loader"/>) : ''}
          {ready === 'loaded' && (
            <Fragment>
              <Listgroup>
                <div className="viewleft">
                  <img src={list.fields.icon[0].url} alt="listing items" />
                </div>
                <div className="viewright">
                  <h2>{list.fields.Tag}</h2>
                  <h4>{list.fields.Asking}</h4>
                  <h5>{list.fields.Summary}</h5>
                  <Info>
                    <h6>Bedrooms: {list.fields.Bedrooms}</h6>
                    <h6>Bathrooms: {list.fields.Bathrooms}</h6>
                    <h6>Area: {list.fields.Area}</h6>
                    <h6>Status: {list.fields.Status}</h6>
                  </Info>
                  <div className="btn">
                    <Link to="/Listings">
                      <input type="button" value="Return" />
                    </Link>
                  </div>
                </div>
              </Listgroup>
            </Fragment>
          )}

        </Liststyle>
       <Footer />
      </Fragment>
    );
  }
}

export default ListView;
