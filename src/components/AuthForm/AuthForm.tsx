import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { login, registration } from 'htttp/userAPI';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, FormEvent, useContext, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE } from 'types/constants';
import { IUser } from 'types/user.inerface';

interface IAuthForm {
  isLogin: boolean;
}

export interface IAxiosError<T> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: unknown;
  response: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}

const AuthForm: FC<IAuthForm> = observer(({ isLogin }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
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

  // const userLogin = async (form: EventTarget & HTMLFormElement) => {
  //   if (form.checkValidity()) {
  //     const userData = await login(email, password);
  //     return userData;
  //   }
  //   setValidated(true);
  //   return;
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      let userData;
      if (isLogin) {
        if (form.checkValidity()) {
          userData = await login(email, password);
        } else {
          setValidated(true);
          return;
        }
      } else {
        if (form.checkValidity() && checkConfirmPassword()) {
          userData = await registration(email, password);
        } else {
          setValidated(true);
          return;
        }
      }
      user.setUser(userData as IUser);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (error) {
      const err = error as IAxiosError<{ message: string }>;
      alert(err.response.data.message);
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      className="column"
      onSubmit={(event) => handleSubmit(event)}
    >
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
});

export default AuthForm;
