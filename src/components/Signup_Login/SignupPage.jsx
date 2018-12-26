import React, { Component,Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import back from '../../../assets/pexels-photo-534233.jpeg'

const Form = styled.form`
  width:90%;
  height:50%;
  background-color: rgba(183, 194, 241, .5);
  margin:0px auto;
  border-radius: 1em;
  h4{
    text-align:center;
    padding 10px;
  }
  .sign{
    margin:20px 0;
    label,input{
      display:block;
      margin: 0px auto;
      width: 80%;
    }
    input{
      height:40px;
    }
  }
  .btn {
    text-align: center;
    padding: 20px;
  }
  .btn input{
    height: 45px;
    width: 192px;
    border: 0;
    border-radius: 0.5em;
    font-size: larger;
    padding: -23px; 
    background-color: #031249;
    color: #b7c2f1;
  }
  .login{
    text-align:center;
    margin:20px;
    color: #293064;
    cursor: pointer;
  }
`;

const Show = styled.div`
  .dontshow{
    display:none;
  }
`;
const LogForm = styled.form`
  background-color: rgba(3, 18, 73, .5);
  color: #b7c2f1;
  width: 90%;
  margin: 0px auto;
  border-radius: 1em;
  display: block;
  height: 50%;
  animation: jackInTheBox 1000ms both;
  h4 {
    text-align: center;
    padding: 20px;
  }
  h5 {
    text-align: center;
    color: red;
  }
  label,
  input {
    display: block;
    width: 80%;
    margin: 0px auto;
  }
  input {
    height: 40px;
    margin-bottom: 20px;
  }

  .logbtn {
    margin: 20px 0;
  }

  .logbtn input {
    height: 45px;
    width: 192px;
    border: 0;
    border-radius: 0.5em;
    font-size: larger;
    padding: -23px;
    background-color: #b7c2f1;
    color: #032149;
  }
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }

    50% {
      transform: rotate(-10deg);
    }

    70% {
      transform: rotate(3deg);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FormGrid = styled.div`
  background-image:url('../../../assets/pexels-photo-534233.jpeg');
  background-size:cover;
  @media(min-width:768px){
    .left{
      width:420px;
      margin:0px auto;
    }
    .right{
      width:420px;
      margin:0px auto;
    }
  }
`;

export default class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      condition: false,
      username: '',
      password: '',
      error: '',
      name:'',
      email:'',
    }
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleRePassChange = this.handleRePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      condition:!this.state.condition
    })
  }
  dismissError() {
    this.setState({ error: '' });
  }
  
  handleSubmit(e) {
    e.preventDefault();
  
    if (!this.state.name) {
      return this.setState({ error: '*Name is required' });
    }
    if (!this.state.username) {
      return this.setState({ error: '*Username is required' });
    }
    if (!this.state.email) {
      return this.setState({ error: '*Email is required' });
    }
  
    if (!this.state.password) {
      return this.setState({ error: '*Password is required' });
    }
    if (this.state.re_password !== this.state.password ) {
      return this.setState({ error: '*Password Do not Match' });
    }
  
    return this.setState({ error: '' });
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  };
  handleUserChange(e) {
    this.setState({
      username: e.target.value,
    });
  };
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  };
  
  handlePassChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleRePassChange(e) {
    this.setState({
      re_password: e.target.value,
    });
  }

  render() {
    return <Fragment>
        <Navbar />
      <FormGrid>
      <div className="left">
        <Form onSubmit={this.handleSubmit}>
          <h4>Sign Up</h4>
          {this.state.error && <h5 onClick={this.dismissError}>
            {this.state.error}
          </h5>}
          <div className="sign">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div className="sign">
            <label htmlFor="UserName">User Name</label>
            <input type="text" name="UserName" value={this.state.username} onChange={this.handleUserChange} />
          </div>
          <div className="sign">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div className="sign">
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" value={this.state.password} onChange={this.handlePassChange} />
          </div>
          <div className="sign">
            <label htmlFor="Password">Retype-Password</label>
            <input type="password" name="Password" value={this.state.re_password} onChange={this.handleRePassChange} />
          </div>
          <div className="btn">
            <input type="submit" value="Sign Up" />
          </div>
          <div className="login">
            <a onClick={this.handleClick.bind(this)}>
              Have An Account? click here
            </a>
          </div>
        </Form>
      </div>
      <div className="right">
        <Show>
          <div className={this.state.condition ? "show" : "dontshow"}>
            <LogForm onSubmit={this.handleSubmit}>
              <h4>Log In</h4>
              {this.state.error && <h5 onClick={this.dismissError}>
                {this.state.error}
              </h5>}
              <label>User Name</label>
              <input type="text" value={this.state.username} onChange={this.handleUserChange} />

              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePassChange} />
              <div className="logbtn">
                <input type="submit" value="Log In" />
              </div>
            </LogForm>
          </div>
        </Show>
      </div>
      </FormGrid>

        <Footer />
      </Fragment>;
  }
}
