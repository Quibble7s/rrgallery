import React from "react";
import { Link } from "react-router-dom";

import GoogleButton from "react-google-button";

import Button from "../components/Buttons/Button";

import "../sass/pages/login.scss";
import "../sass/components/Input/input.scss";
import "../sass/text.scss";

const AuthLogin = () => {
  return (
    <div className='container --w-100'>
      <form className='login'>
        <h1 className='text text--size-subtitle text--color-primary --mb-large'>
          Sign In
        </h1>
        <input
          className='input input-field'
          type='email'
          placeholder='email'
          name='email'
          id='email'
        />
        <input
          className='input input-field'
          type='password'
          placeholder='password'
          name='password'
          id='password'
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
        <GoogleButton className='--mt-regular' />
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
