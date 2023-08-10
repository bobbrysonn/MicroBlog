import Body from "../components/body"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputField from "../components/InputField"
import { useEffect, useRef, useState } from "react"

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

    console.log(`You entered ${username}:${password}`);
  }

  return (
    <Body>
     <h1>Login</h1>
     <Form onSubmit={onSubmit}>
       <InputField
         name="username" label="Username or Email address"
	 error={formErrors.username}
	 placeholder="Username or email"
	 fieldRef={usernameField}
       />

       {/* Password field */}
       <InputField
         name="passworld" label="Password"
	 error={formErrors.password}
	 placeholder="Password"
	 type="password"
	 fieldRef={passwordField}
       />

       <Button type="submit" variant="primary">Login</Button>
     </Form>
    </Body>
  );
}
