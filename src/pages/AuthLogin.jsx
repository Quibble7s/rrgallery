import React, { memo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import {
  SignInWithEmailAndPassword,
  SignInWithGoogle,
} from '../helpers/Actions/Auth';
import { useOnElementActive } from '../hooks/useOnElementActive';

import Background from '../assets/img/background/authbg.svg';
import Button from '../components/Buttons/Button';

import '../sass/pages/login.scss';
import '../sass/components/Input/input.scss';
import '../sass/text.scss';

const AuthLogin = () => {
  const dispatch = useDispatch();
  const [[errorMessage, displayError], setError] = useState(['', false]);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const onLoginHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      SignInWithEmailAndPassword(
        data.email,
        data.password,
        onLoginErrorHandler,
      ),
    );
  };
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onLoginErrorHandler = (err) => {
    if (err.code === 'auth/wrong-password') {
      setError(['Incorrect password', true]);
    } else if (err.code === 'auth/user-not-found') {
      setError(['Username / Email not found', true]);
    }
  };

  const [onFocus, onBlur] = useOnElementActive('input--active');
  return (
    <>
      <div className='w-full h-screen grid gap-8 lg:gap-32 gird-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col items-center lg:items-end justify-center'>
          <img
            className='mt-8 lg:mt-0'
            width={318}
            height={612}
            src={Background}
            alt=' '
          />
        </div>
        <div className='flex flex-col items-center lg:items-start justify-center'>
          <form
            onSubmit={onLoginHandler}
            className='shadow-md border-t-4 border-primary w-full z-10 md:w-max flex flex-col items-center p-16 rounded-md'>
            <div className='logo --mb-large'>
              <h1 className='text text--size-subtitle text--color-gray text--center'>
                Login
              </h1>
            </div>
            <input
              style={{ width: '100%' }}
              onFocus={onFocus}
              onBlur={onBlur}
              className='input input-field-gray input-field--placeholder-gray --mt-large'
              type='email'
              placeholder='email'
              name='email'
              id='email'
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              style={{ width: '100%' }}
              onFocus={onFocus}
              onBlur={onBlur}
              className='input input-field-gray input-field--placeholder-gray --mt-large'
              type='password'
              placeholder='password'
              name='password'
              id='password'
              value={data.password}
              onChange={onChangeHandler}
              required
            />
            {displayError && (
              <p className='text text--size-small text--center text--color-error --fade-in'>
                {errorMessage}
              </p>
            )}
            <Button
              className='text--size-small --mt-large --w-50 btn--radius-4 btn btn--primary w-full'
              value='Log in'
              type='submit'
            />
            <Link
              className='text text--size-small text--decoration-none text--center --mt-small'
              to='/auth/register'>
              Don't have an account?{' '}
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
      </div>
    </>
  );
};

export default memo(AuthLogin);
