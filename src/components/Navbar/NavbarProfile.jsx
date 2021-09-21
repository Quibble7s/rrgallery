import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { Logout } from "../../helpers/Actions/Auth";

import Button from "../Buttons/Button";

const NavbarProfile = ({ uid, photoURL }) => {
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.id === profileRef?.current.id &&
        !dropdownRef?.current.classList.contains("nav-profile-dropdown--active")
      ) {
        dropdownRef?.current.classList.add("nav-profile-dropdown--active");
      } else {
        dropdownRef?.current.classList.remove("nav-profile-dropdown--active");
      }
    });
  }, []);
  return (
    <div className='nav-profile'>
      <img
        ref={profileRef}
        id='profile'
        className='nav-profile__pfp'
        src={photoURL ? photoURL : "./assets/img/defaultpfp.svg"}
        alt='pfp'
      />
      <div ref={dropdownRef} className='nav-profile-dropdown'>
        <Link
          className='text text--size-regular text--decoration-none'
          to='/user/config'>
          Configuration
        </Link>
        <Link
          className='text text--size-regular text--decoration-none'
          to={`/user/profile/${encodeURI(uid)}`}>
          Profile
        </Link>
        <Button
          className='btn btn--radius-8 btn--primary text--size-regular'
          value='Logout'
          onClick={Logout}
        />
      </div>
    </div>
  );
};

export default NavbarProfile;
