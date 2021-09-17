import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { SignInWithEmailAndPassword } from "../helpers/Actions/Auth";
import { useOnElementActive } from "../hooks/useOnElementActive";
import Button from "../components/Buttons/Button";

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
    <div className='container --w-100'>
      <div className='logo --mb-large'>
        <img
          className='logo__image'
          src='./assets/img/gallery.svg'
          alt='logo'
        />
        <h1 className='text text--size-subtitle text--color-primary'>
          rrgallery
        </h1>
      </div>
      <form onSubmit={onLoginHandler} className='login'>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className='input input-field'
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
          className='input input-field'
          type='password'
          placeholder='password'
          name='password'
          id='password'
          value={data.password}
          onChange={onChangeHandler}
        />
        <Button
          className='btn text--size-small btn--primary'
          value='Log in'
          type='submit'
        />

        <Link
          className='text text--size-small text--decoration-none --mt-regular'
          to='/register'>
          Don't have an account?{" "}
          <span className='text--decoration-underline'>Register</span>...
        </Link>
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
