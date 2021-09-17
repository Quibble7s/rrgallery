import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";

import { Register } from "../helpers/Actions/Auth";
import { useOnChange } from "../hooks/useOnChange";

import "../sass/components/Input/input.scss";
import "../sass/pages/register.scss";

const AuthRegister = () => {
  const [data, onChangeHandler] = useOnChange({
    username: "",
    email: "",
    confirmemail: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const onRegisterHandler = (e) => {
    e.preventDefault();
    if (
      data.email !== data.confirmemail ||
      data.password !== data.confirmpassword ||
      data.password.lenght < 8
    ) {
      return;
    }
    dispatch(Register(data.email, data.password, data.username));
  };
  return (
    <div className='container --w-100'>
      <form onSubmit={onRegisterHandler} className='register'>
        <h1 className='text text--size-subtitle text--color-primary --mb-large'>
          Register
        </h1>
        <input
          onChange={onChangeHandler}
          className='input input-field'
          name='username'
          id='username'
          type='text'
          placeholder='Username*'
          required
          value={data.username}
          autoComplete='off'
        />
        <input
          onChange={onChangeHandler}
          className='input input-field'
          name='email'
          id='email'
          type='email'
          placeholder='email*'
          required
          value={data.email}
          autoComplete='off'
        />
        <input
          onChange={onChangeHandler}
          className='input input-field'
          name='confirmemail'
          id='confirmemail'
          type='email'
          placeholder='Confirm email*'
          required
          value={data.confirmemail}
          autoComplete='off'
        />
        <input
          onChange={onChangeHandler}
          className='input input-field'
          name='password'
          id='password'
          type='password'
          placeholder='Password*'
          required
          value={data.password}
          autoComplete='off'
        />
        <input
          onChange={onChangeHandler}
          className='input input-field'
          name='confirmpassword'
          id='confirmpassword'
          type='password'
          placeholder='Confirm password*'
          required
          value={data.confirmpassword}
          autoComplete='off'
        />
        <Button
          className='btn text text--size-small text--color-white'
          value='Register'
          type='submit'
        />
        <Link
          className='text text--size-small text--decoration-none --mt-regular'
          to='/login'>
          Already have an account?{" "}
          <span className='text--decoration-underline'>Log in</span>...
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

export default AuthRegister;