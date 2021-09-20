import React from "react";
import { useSelector } from "react-redux";

import ImageButton from "../Buttons/ImageButton";
import SearchBar from "../Input/SearchBar";
import NavbarProfile from "./NavbarProfile";

import "../../sass/components/Navbar/navbar.scss";

const Navbar = () => {
  const { auth } = useSelector((state) => state);
  return (
    <nav className='nav'>
      <h1 className='text text--size-title text--color-white'>rrgallery</h1>
      <form className='search-form'>
        <ImageButton
          className='btn btn--circular'
          imgSrc='./assets/img/search.svg'
          value='Search'
          type='submit'
        />
        <SearchBar />
      </form>
      <NavbarProfile uid={auth.uid} photoURL={auth.photoURL} />
    </nav>
  );
};

export default Navbar;
