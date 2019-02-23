import React, { Component } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";
import Layout from "../Layout";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showLayout: false,
      username:"naren",
      userpassword:"1234"
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChangeEmail = event => {
    this.setState({
        email: event.target.value
    });
  }

  handleChangePassword= event => {
    this.setState({
        password: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }

  submitForm() {
    if(this.state.email===this.state.username && this.state.password===this.state.password){
      this.setState({
        showLayout: false
    })

    alert("login success")

    }
    else{
      alert("username or password incorrect")
    }

      
  }

  render() {
    return (
    <div>
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <Label>Email</Label>
            <Input
              autoFocus
              type="email"
              onChange={this.handleChangeEmail}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <Label>Password</Label>
            <Input
              onChange={this.handleChangePassword}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick = {(e)=>{this.submitForm(e)}}
          >
            Login
          </Button>
        </form>
      </div>
      </div>
    );
  }
}