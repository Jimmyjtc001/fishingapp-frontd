import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Link
} from "react-router-dom";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginComponent(props) {
  const {email, password, onEmailChange, onPasswordChange, onClick, onBackClick
  } = props;

  return (
    <Container>
      <Form>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please enter your email here"
            value={email}
            onChange={event => onEmailChange(event)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password here"
            value={password}
            onChange={event => onPasswordChange(event)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={event => onClick(event)}
        >
          Continue
        </Button>{" "}
        <Button
          variant="primary"
          type="submit"
          onClick={event => onBackClick(event)}
        >
          Back
        </Button>
      </Form>
    </Container>
  );
}
