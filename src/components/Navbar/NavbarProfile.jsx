import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Logout } from "../../helpers/Actions/Auth";

import Button from "../Buttons/Button";

import defaultPfp from "../../assets/img/defaultpfp.svg";

const NavbarProfile = ({ uid, photoURL }) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.id === document.querySelector("#profile").id &&
        !document
          .querySelector("#dropdown")
          ?.classList.contains("nav-profile-dropdown--active")
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
