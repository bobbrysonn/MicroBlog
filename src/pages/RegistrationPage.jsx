import Body from "../components/body";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";
import { useEffect, useRef, useState } from "react";

export default function RegistrationPage() {
  const [formErrors, setFormErrors] = useState({});
  const api = useApi();

  // Refs
  const usernameField = useRef();
  const passwordField = useRef();
  const confirmPasswordField = useRef();
  const emailField = useRef();
  const navigate = useNavigate();

  // Onsubmit handler
  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate that passwords are matching
    if (passwordField.current.value != confirmPasswordField.current.value) {
      setFormErrors({
        ...formErrors,
        confirm_password: "Passwords don't match",
      });
    } else {
      // Submit the form
      const data = await api.post("/users", {
        username: usernameField.current.value,
        email: emailField.current.value,
        password: passwordField.current.value,
      });

      if (!data.ok) {
        setFormErrors(data.body.errors.json);
      } else {
        setFormErrors({});
        navigate("/login");
      }
    }
  };

  // Focus username field
  useEffect(() => {
    usernameField.current.focus();
  }, []);

  return (
    <Body>
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username"
          fieldRef={usernameField}
          error={formErrors.username}
        />
        <InputField
          name="email"
          label="Email"
          fieldRef={emailField}
          error={formErrors.email}
        />
        <InputField
          name="password"
          label="Password"
          fieldRef={passwordField}
          type="password"
          error={formErrors.password}
        />
        <InputField
          name="confirm_password"
          label="Confirm password"
          type="password"
          error={formErrors.confirm_password}
          fieldRef={confirmPasswordField}
        />
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </Body>
  );
}
