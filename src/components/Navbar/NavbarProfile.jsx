import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { Logout } from "../../helpers/Actions/Auth";

import Button from "../Buttons/Button";

const NavbarProfile = ({ uid, photoURL }) => {
  const dropdownRef = useRef();
  const onProfileClick = () => {
    dropdownRef.current.classList.toggle("nav-profile-dropdown--active");
  };
  return (
    <div onClick={onProfileClick} className='nav-profile'>
      <img
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
