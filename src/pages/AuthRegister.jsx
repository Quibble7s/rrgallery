import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Buttons/Button';

import { Register } from '../helpers/Actions/Auth';
import { useOnChange } from '../hooks/useOnChange';
import { useOnElementActive } from '../hooks/useOnElementActive';

import Background from '../assets/img/background/authbg.svg';

import '../sass/components/Input/input.scss';
import '../sass/pages/register.scss';
import { useState } from 'react';

const AuthRegister = () => {
  const [[errorMessage, displayError], setError] = useState(['', false]);
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
    if (data.email !== data.confirmemail) {
      setError(['Emails must match.', true]);
      return;
    } else if (data.password !== data.confirmpassword) {
      setError(['Passwords must match.', true]);
    } else if (data.password.length < 8) {
      setError(['Password must be 8 characters long or more.', true]);
      return;
    }
    dispatch(Register(data.email, data.password, data.username));
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
            onSubmit={onRegisterHandler}
            className='shadow-md border-t-4 border-primary w-full z-10 md:w-max flex flex-col items-center p-16 rounded-md'>
            <h1 className='text text--size-subtitle text--color-gray text--center --mb-regular'>
              Register
            </h1>
            <input
              style={{ width: '100%' }}
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
              style={{ width: '100%' }}
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
              style={{ width: '100%' }}
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
              style={{ width: '100%' }}
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
              style={{ width: '100%' }}
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
            {displayError && (
              <p className='text text--center text--color-error text--size-small'>
                {errorMessage}
              </p>
            )}
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
      </div>
    </>
  );
};

export default memo(AuthRegister);
