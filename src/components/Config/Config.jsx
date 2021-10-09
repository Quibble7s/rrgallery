import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useOnChange } from '../../hooks/useOnChange';
import { updateUserProfile } from '../../helpers/Actions/Auth';

import Button from '../Buttons/Button';

import defaultProfilePicture from '../../assets/img/defaultpfp.svg';
import editImage from '../../assets/img/edit1.svg';
import cancelImage from '../../assets/img/cancel.svg';

import '../../helpers/Firebase/storage';
import Loading from '../Loading/Loading';
import { updateProfilePicture } from '../../helpers/Firebase/storage';
import { getUser, updateProfileConfig } from '../../helpers/Firebase/database';
import { useEffect } from 'react';

const Config = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputData, onChangeHandler] = useOnChange(
    { name: auth.displayName },
    24,
  );
  const [[imageBuffer, extension], setImage] = useState([null, null]);
  const [editMode, setEditMode] = useState(false);
  const [profileUpdating, setProfileUpdating] = useState(false);
  const [userPreferences, setUserPreferences] = useState(['1024', '512']);
  const [updatingPreferences, setUpdatingPreferences] = useState(false);

  useEffect(() => {
    const GetUser = async () => {
      setUpdatingPreferences(true);
      await getUser(auth.uid).then(async (data) => {
        await setUserPreferences(data.configuration.preferences);
      });
      setUpdatingPreferences(false);
    };
    GetUser();
  }, [auth.uid]);

  const onFileSelectedHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const raw = e.target.value.split('\\');
      const full = raw[raw.length - 1].split('.');
      const ext = `${full[full.length - 1]}`;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.addEventListener('load', async () => {
        await setImage([reader.result, ext]);
      });
    }
  };

  const onUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileUpdating(true);
    if (imageBuffer) {
      await updateProfilePicture(imageBuffer, extension, auth.uid).then(
        async (url) => {
          await dispatch(updateUserProfile(inputData.name, url));
        },
      );
    } else {
      await dispatch(updateUserProfile(inputData.name));
    }
    setProfileUpdating(false);
    setEditMode(false);
  };

  const onUpdateConfiguration = async (e) => {
    e.preventDefault();
    setUpdatingPreferences(true);
    const fullQ = document.querySelector('#fullviewquality');
    const cardQ = document.querySelector('#cardquality');
    await updateProfileConfig(auth.uid, {
      configuration: {
        preferences: [fullQ.value, cardQ.value],
      },
    });
    setUpdatingPreferences(false);
  };

  const enterEditModeHandler = () => {
    setEditMode(true);
  };

  const cancelEditHandler = () => {
    setEditMode(false);
  };

  return (
    <div className='config'>
      <form onSubmit={onUpdateProfile} className='config-profile'>
        <div className='config-profile-img'>
          {profileUpdating ? (
            <Loading className='config-profile__btn-img' maxWidth='64px' />
          ) : (
            <>
              <img
                className='config-profile__img'
                src={auth.photoURL ? auth.photoURL : defaultProfilePicture}
                alt='pfp'
              />
              {editMode && (
                <div className='config-profile-img-input'>
                  <label className='text text--color-black' htmlFor='file'>
                    Select an image
                  </label>
                  <input
                    type='file'
                    name='image'
                    id='file'
                    accept='image/png, image/gif, image/jpeg'
                    onChange={onFileSelectedHandler}
                  />
                </div>
              )}
            </>
          )}
        </div>
        <div className='config-profile-username --mt-regular'>
          {!editMode ? (
            <>
              <p className='text text--color-gray text--size-regular --mt-small'>
                {auth.displayName}
              </p>
              <button
                className='config-profile__btn --float-left --mt-small'
                onClick={enterEditModeHandler}
                type='button'>
                <img
                  className='config-profile__btn-img'
                  src={editImage}
                  alt='edit'
                />
              </button>
            </>
          ) : (
            <>
              {profileUpdating ? (
                <Loading className='config-profile__btn-img' maxWidth='64px' />
              ) : (
                <>
                  <input
                    name='name'
                    value={inputData.name}
                    onChange={onChangeHandler}
                    type='text'
                    className='input input-field-gray input-field--placeholder-gray --w-50 config-profile__input'
                  />
                  <button
                    className='config-profile__btn --float-left --mt-small'
                    onClick={cancelEditHandler}
                    type='button'>
                    <img
                      className='config-profile__btn-img'
                      src={cancelImage}
                      alt='cancel'
                    />
                  </button>
                </>
              )}
            </>
          )}
        </div>
        {editMode && !profileUpdating && (
          <Button
            className='btn btn--radius-4 btn--primary --mt-regular'
            value='Save'
            type='submit'
          />
        )}
      </form>
      <span className='config-separator'></span>
      <form onSubmit={onUpdateConfiguration} className='config-preferences'>
        <h3 className='text text--color-gray'>Preferences</h3>
        <label
          htmlFor='fullviewquality'
          className='text text--color-gray text--size-regular --mt-regular'>
          Full view image quality
        </label>
        <select
          id='fullviewquality'
          className='config-preferences-selection --mt-small'>
          <option value='2048' selected={userPreferences[0] === '2048'}>
            2048 Pixels
          </option>
          <option value='1024' selected={userPreferences[0] === '1024'}>
            1024 Pixels
          </option>
          <option value='512' selected={userPreferences[0] === '512'}>
            512 Pixels
          </option>
        </select>
        <label
          htmlFor='cardquality'
          className='text text--color-gray text--size-regular --mt-regular'>
          Card image quality
        </label>
        <select
          id='cardquality'
          className='config-preferences-selection --mt-small'>
          <option value='1024' selected={userPreferences[1] === '1024'}>
            1024 Pixels
          </option>
          <option value='512' selected={userPreferences[1] === '512'}>
            512 Pixels
          </option>
          <option value='256' selected={userPreferences[1] === '256'}>
            256 Pixels
          </option>
        </select>
        <div className='config-preferences-save'>
          {updatingPreferences ? (
            <Loading className='config-profile__btn-img' maxWidth='64px' />
          ) : (
            <Button
              type='submit'
              value='Save'
              className='btn btn--radius-4 btn--primary --mt-regular'
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Config;
