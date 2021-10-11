import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Buttons/Button';

import { Register } from '../helpers/Actions/Auth';
import { useOnChange } from '../hooks/useOnChange';
import { useOnElementActive } from '../hooks/useOnElementActive';

import backgroundTop from '../assets/img/background/background-top.svg';
import backgroundBottom from '../assets/img/background/background-bottom.svg';

import '../sass/components/Input/input.scss';
import '../sass/pages/register.scss';

const AuthRegister = () => {
  const [data, onChangeHandler] = useOnChange({
    username: '',
    email: '',
    confirmemail: '',
    password: '',
    confirmpassword: '',
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
  const [onFocus, onBlur] = useOnElementActive('input--active');
  return (
    <>
      <img className='background--top' src={backgroundTop} alt='' />
      <div className='container --w-100 --center'>
        <form onSubmit={onRegisterHandler} className='register'>
          <h1 className='text text--size-subtitle text--color-gray text--center --mb-regular'>
            Register
          </h1>
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            className='input input-field-gray input-field--placeholder-gray --mt-large'
            name='username'
            id='username'
            type='text'
            placeholder='username'
            required
            value={data.username}
            autoComplete='off'
          />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            className='input input-field-gray input-field--placeholder-gray --mt-large'
            name='email'
            id='email'
            type='email'
            placeholder='email'
            required
            value={data.email}
            autoComplete='off'
          />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            className='input input-field-gray input-field--placeholder-gray --mt-large'
            name='confirmemail'
            id='confirmemail'
            type='email'
            placeholder='confirm email'
            required
            value={data.confirmemail}
            autoComplete='off'
          />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            className='input input-field-gray input-field--placeholder-gray --mt-large'
            name='password'
            id='password'
            type='password'
            placeholder='password'
            required
            value={data.password}
            autoComplete='off'
          />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            className='input input-field-gray input-field--placeholder-gray --mt-large'
            name='confirmpassword'
            id='confirmpassword'
            type='password'
            placeholder='confirm password'
            required
            value={data.confirmpassword}
            autoComplete='off'
          />
          <Button
            className='btn text--size-small btn--primary --mt-large --w-50 btn--radius-4'
            value='Register'
            type='submit'
          />
          <Link
            className='text text--size-small text--decoration-none text--center --mt-small'
            to='/auth/login'>
            Already have an account?{' '}
            <span className='text--decoration-underline text--hover-primary'>
              Log in
            </span>
            ...
          </Link>
        </form>
      </div>
      <img className='background--bottom' src={backgroundBottom} alt='' />
    </>
  );
};

export default memo(AuthRegister);
