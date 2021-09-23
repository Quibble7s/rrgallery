import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";

import { Register } from "../helpers/Actions/Auth";
import { useOnChange } from "../hooks/useOnChange";
import { useOnElementActive } from "../hooks/useOnElementActive";

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
  const [onFocus, onBlur] = useOnElementActive("input--active");
  return (
    <div className='container --w-100 --center'>
      <form onSubmit={onRegisterHandler} className='register'>
        <h1 className='text text--size-subtitle text--color-primary text--center --mb-regular'>
          Register
        </h1>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
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
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandler}
          className='input input-field --mt-regular'
          name='email'
          id='email'
          type='email'
          placeholder='email*'
          required
          value={data.email}
          autoComplete='off'
        />
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandler}
          className='input input-field --mt-regular'
          name='confirmemail'
          id='confirmemail'
          type='email'
          placeholder='Confirm email*'
          required
          value={data.confirmemail}
          autoComplete='off'
        />
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandler}
          className='input input-field --mt-regular'
          name='password'
          id='password'
          type='password'
          placeholder='Password*'
          required
          value={data.password}
          autoComplete='off'
        />
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandler}
          className='input input-field --mt-regular'
          name='confirmpassword'
          id='confirmpassword'
          type='password'
          placeholder='Confirm password*'
          required
          value={data.confirmpassword}
          autoComplete='off'
        />
        <Button
          className='btn text--size-small btn--primary --mt-regular --w-50 btn--radius-8'
          value='Register'
          type='submit'
        />
        <Link
          className='text text--size-small text--decoration-none text--center --mt-regular'
          to='/auth/login'>
          Already have an account?{" "}
          <span className='text--decoration-underline text--hover-primary'>
            Log in
          </span>
          ...
        </Link>
      </form>
      <img
        className='background--top'
        src='./assets/img/background/login-background-top.svg'
        alt=''
      />
    </div>
  );
};

export default AuthRegister;
