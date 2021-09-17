import React from "react";
import { Link } from "react-router-dom";

import GoogleButton from "react-google-button";

import Button from "../components/Buttons/Button";

import "../sass/pages/login.scss";
import "../sass/components/Input/input.scss";
import "../sass/text.scss";
import {
  Login,
  SignInWithEmailAndPassword,
  SignInWithGoogle,
} from "../helpers/Actions/Auth";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
  const onGoogleLoginHandler = () => {
    dispatch(SignInWithGoogle());
  };
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className='container --w-100'>
      <form onSubmit={onLoginHandler} className='login'>
        <h1 className='text text--size-subtitle text--color-primary --mb-large'>
          Sign In
        </h1>
        <input
          className='input input-field'
          type='email'
          placeholder='email'
          name='email'
          id='email'
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          className='input input-field'
          type='password'
          placeholder='password'
          name='password'
          id='password'
          value={data.password}
          onChange={onChangeHandler}
        />
        <Button
          className='btn text text--size-small text--color-white'
          value='Login'
          type='submit'
        />

        <Link
          className='text text--size-small text--decoration-none --mt-small'
          to='/register'>
          Don't have an account?{" "}
          <span className='text--decoration-underline'>Register...</span>
        </Link>
        <p className='text text--size-small --mt-regular'>Or</p>
        {/* <GoogleButton onClick={onGoogleLoginHandler} className='--mt-regular' /> */}
      </form>
      <img
        className='background--bottom'
        src='./assets/img/background/login-background.svg'
        alt=''
      />
    </div>
  );
};

export default AuthLogin;
