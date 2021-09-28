import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

import {
  SignInWithEmailAndPassword,
  SignInWithGoogle,
} from "../helpers/Actions/Auth";
import { useOnElementActive } from "../hooks/useOnElementActive";

import Button from "../components/Buttons/Button";

import gallery from "../assets/img/gallery.svg";
import background from "../assets/img/background/login-background-top.svg";

import "../sass/pages/login.scss";
import "../sass/components/Input/input.scss";
import "../sass/text.scss";

const AuthLogin = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onLoginHandler = (e) => {
    e.preventDefault();
    dispatch(SignInWithEmailAndPassword(data.email, data.password));
  };
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const [onFocus, onBlur] = useOnElementActive("input--active");
  return (
    <div className='container --w-100 --center'>
      <form onSubmit={onLoginHandler} className='login'>
        <div className='logo --mb-large'>
          <h1 className='text text--size-subtitle text--color-light-gray text--center'>
            login
          </h1>
        </div>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className='input input-field-light-gray input-field--placeholder-light-gray --mt-large'
          type='email'
          placeholder='email'
          name='email'
          id='email'
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className='input input-field-light-gray input-field--placeholder-light-gray --mt-large'
          type='password'
          placeholder='password'
          name='password'
          id='password'
          value={data.password}
          onChange={onChangeHandler}
        />
        <Button
          className='text--size-small --mt-large --w-50 btn--radius-4 btn btn--light-gray'
          value='Log in'
          type='submit'
        />
        <Link
          className='text text--size-small text--decoration-none text--center --mt-small'
          to='/auth/register'>
          Don't have an account?{" "}
          <span className='text--decoration-underline text--hover-primary'>
            Register
          </span>
          ...
        </Link>
        <p className='text text--size-regular --mt-large'>Or</p>
        <GoogleButton
          className='--mt-regular'
          onClick={dispatch(SignInWithGoogle)}
        />
      </form>
    </div>
  );
};

export default AuthLogin;
