import { Context } from 'index';
import React, { FC, FormEvent, useContext, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from 'types/constants';

interface IAuthForm {
  isLogin: boolean;
}

const AuthForm: FC<IAuthForm> = ({ isLogin }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(true);

  const showPassword = (id: string): void => {
    const input = document.querySelector(`#${id}`) as HTMLInputElement;
    input.type === 'password' ? (input.type = 'text') : (input.type = 'password');
  };

  const checkConfirmPassword = (): boolean => {
    if (password === confirmPassword) return true;
    setConfirmPassword('');
    return false;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() && checkConfirmPassword()) {
      //if true save data and reset
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      className="column"
      onSubmit={(event) => handleSubmit(event)}
    >
      {/* name */}
      <Form.Group className="mb-3" as={Col}>
        {!isLogin && (
          <Form.Control
            type="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        )}
        <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
      </Form.Group>

      {/* email */}
      <Form.Group className="mb-3" as={Col}>
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">Incorrect email</Form.Control.Feedback>
      </Form.Group>

      {/* passwords */}
      <InputGroup className="mb-3" as={Col} hasValidation>
        <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => showPassword('authPassword')}>
          @
        </InputGroup.Text>
        <Form.Control
          id="authPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">Incorrect Password</Form.Control.Feedback>
      </InputGroup>

      {!isLogin && (
        <InputGroup className="mb-3" as={Col} hasValidation>
          <InputGroup.Text
            style={{ cursor: 'pointer' }}
            onClick={() => showPassword('authConfirmPassword')}
          >
            @
          </InputGroup.Text>
          <Form.Control
            id="authConfirmPassword"
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">Password does not match</Form.Control.Feedback>
        </InputGroup>
      )}

      {/* text */}
      {isLogin ? (
        <Form.Text className="mb-3" as="div">
          Forgot password?
        </Form.Text>
      ) : (
        <Form.Check
          className="mb-3"
          type="checkbox"
          label="I have read and agree to the terms"
          required
          checked={agreement}
          onChange={(event) => setAgreement(event.target.checked)}
        />
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AuthForm;
