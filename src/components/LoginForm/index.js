import * as React from "react";
import { FormGroup, Input, Button, Spinner } from "components/lib";

export default function LoginForm({ buttonText, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "320px" }}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input name="username" id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input name="password" id="password" type="password" />
      </FormGroup>
      <FormGroup>
        <Button type="submit">
          {buttonText}
          <Spinner />
        </Button>
      </FormGroup>
    </form>
  );
}
