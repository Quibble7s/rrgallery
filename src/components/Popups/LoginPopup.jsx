import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../sass/components/Popups/popup.scss';
import Button from '../Buttons/Button';

const LoginPopup = ({ active, setDisplayPopup = () => null }) => {
  const history = useHistory();
  const displayPopupHandler = () => {
    setDisplayPopup(false);
  };
  return (
    <div className={active ? 'popup popup--active' : 'popup popup--disabled'}>
      <div className='popup-login'>
        <div className='popup-login-top'>
          <Button
            value='x'
            className='btn--radius-4 btn btn--light-gray --pd-small'
            onClick={displayPopupHandler}
          />
        </div>
        <div className='popup-login-content --center'>
          <h3 className='text text--center text--color-gray'>
            To access this feature please
          </h3>
          <div className='popup-login-content__buttons --mt-large text--color-gray'>
            <Button
              value='Login'
              className='btn btn--gray btn--radius-4 popup-login-content__buttons-button'
              onClick={() => {
                history.push('auth/login');
              }}
            />
            <Button
              value='Register'
              className='btn btn--primary btn--radius-4 popup-login-content__buttons-button'
              onClick={() => {
                history.push('auth/register');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
