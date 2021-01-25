import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import styles from "./auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const displayErrors = () =>
    errors.map((error, key) => <p key={key}> {error.message} </p>);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email,password });
  };
  return (
    <Grid textAlign="center" verticalAlign="middle" className={styles.form}>
      <GridColumn className={styles.width}>
        <Header as="h2" color="violet" icon>
          <Icon name="comment alternate outline" />
          {"Log in to confessor"}
        </Header>

        <Form>
          <Segment>
            <Form.Field>
              <Form.Input
                fluid
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                icon="mail"
                iconPosition="left"
                name="email"
                type="email"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                icon="lock"
                iconPosition="left"
                name="password"
                type="password"
              />
            </Form.Field>
          </Segment>

          <Button color="green" fluid size="large" onClick={handleSubmit}>
            Log In
          </Button>
        </Form>
        {errors.length > 0 && <Message error>{displayErrors()}</Message>}
        <Message>
          <Icon name="help" />
          New to Confessor? <Link to="/register"><u>Sign Up</u> </Link>
        </Message>
      </GridColumn>
    </Grid>
  );
};

export default Login;
