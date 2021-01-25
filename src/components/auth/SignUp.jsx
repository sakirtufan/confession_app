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

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username,email,password,gender,passwordConfirm });
  };

  const displayErrors = () =>
    errors.map((error, key) => <p key={key}> {error.message} </p>);

  return (
    <Grid textAlign="center" verticalAlign="middle" className={styles.form}>
      <GridColumn className={styles.width}>
        <Header as="h2" color="violet" icon>
          <Icon name="comment alternate outline" />
          {"Sign up for free and experience Confessor today"}
        </Header>

        <Form>
          <Segment>
            <Form.Field>
              <Form.Input
                fluid
                placeholder="User Name"
                onChange={(e) => setUsername(e.target.value)}
                icon="users"
                iconPosition="left"
                name="username"
                type="text"
              />
            </Form.Field>
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
            <Form.Field>
              <Form.Input
                fluid
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                icon="repeat"
                iconPosition="left"
                name="confirmPassword"
                type="password"
              />
            </Form.Field>
          </Segment>
          <Segment>
            <Form.Group inline>
              <label>Gender</label>
              <Form.Radio
                label="Male"
                name="radiogroup"
                value="male"
                checked={gender === "male"}
                onChange={(e, { value }) => setGender(value)}
              />
              <Form.Radio
                label="Female"
                name="radiogroup"
                value="female"
                checked={gender === "female"}
                onChange={(e, { value }) => setGender(value)}
              />
            </Form.Group>
          </Segment>
          <Button color="green" fluid size="large" onClick={handleSubmit}>
            CREATE FREE ACCOUNT
          </Button>
        </Form>
        {errors.length > 0 && <Message error>{displayErrors()}</Message>}
        <Message>
          <Icon name="help" />
          Already have an account? <Link to="/login"><u>Log In</u></Link>
        </Message>
      </GridColumn>
    </Grid>
  );
};

export default SignUp;
