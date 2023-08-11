import Body from "../components/body";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function LoginPage() {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;

    const errors = {};

    // Check if fields are empty
    if (!username) {
      errors.username = "Username must not be empty";
    }

    if (!password) {
      errors.password = "Password must not be empty";
    }

    // Update form errors
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
  }

  return (
    <Body>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username or Email address"
          error={formErrors.username}
          placeholder="Username or email"
          fieldRef={usernameField}
        />

        {/* Password field */}
        <InputField
          name="passworld"
          label="Password"
          error={formErrors.password}
          placeholder="Password"
          type="password"
          fieldRef={passwordField}
        />

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>

      <hr />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>!
      </p>
    </Body>
  );
}
