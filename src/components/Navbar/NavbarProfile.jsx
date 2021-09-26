import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Logout } from "../../helpers/Actions/Auth";

import Button from "../Buttons/Button";

import defaultPfp from "../../assets/img/defaultpfp.svg";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const NavbarProfile = ({ uid, photoURL }) => {
  const { auth } = useSelector((state) => state);

  const onClick = useCallback((e) => {
    const profile = document.querySelector("#profile");
    if (
      e.target.id === profile?.id &&
      !document
        .querySelector("#dropdown")
        ?.classList.contains("nav-profile-dropdown--active") &&
      profile
    ) {
      document
        .querySelector("#dropdown")
        ?.classList.add("nav-profile-dropdown--active");
    } else {
      document
        .querySelector("#dropdown")
        ?.classList.remove("nav-profile-dropdown--active");
    }
  });

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className='nav-profile'>
      <img
        id='profile'
        className='nav-profile__pfp'
        src={photoURL ? photoURL : defaultPfp}
        alt='pfp'
      />
      <div id='dropdown' className='nav-profile-dropdown'>
        {auth.loged ? (
          <>
            <Link
              className='text text--size-regular text--decoration-none text--hover-primary'
              to='/user/configuration'>
              Configuration
            </Link>
            <Link
              className='text text--size-regular text--decoration-none text--hover-primary'
              to={`/user/profile/${encodeURI(uid)}`}>
              Profile
            </Link>
            <Button
              className='btn btn--radius-4 btn--primary text--size-regular --w-100'
              value='Logout'
              onClick={Logout}
            />
          </>
        ) : (
          <>
            <Link to='/auth/login' className='--w-100'>
              <Button
                className='btn btn--radius-4 btn--primary text--size-regular --w-100'
                value='Login'
              />
            </Link>
            <Link to='/auth/register' className='--w-100'>
              <Button
                className='btn btn--radius-4 btn--primary text--size-regular --w-100'
                value='Register'
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarProfile;
