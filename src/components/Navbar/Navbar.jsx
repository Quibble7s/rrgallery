import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import ImageButton from "../Buttons/ImageButton";
import SearchBar from "../Input/SearchBar";
import NavbarProfile from "./NavbarProfile";

import searchImage from "../../assets/img/search.svg";

import "../../sass/components/Navbar/navbar.scss";

const Navbar = () => {
  const history = useHistory();
  const { auth } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");

  const onSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${encodeURI(inputValue.toLowerCase())}&p=${1}`);
  };

  return (
    <nav className='nav'>
      <Link className='text--decoration-none' to='/'>
        <h1 className='text text--size-title text--color-gray text--hover-gray'>
          rrgallery
        </h1>
      </Link>
      <form onSubmit={onSearchSubmit} className='search-form'>
        <ImageButton
          className='btn btn--circular --pdb-none'
          imgSrc={searchImage}
          value='Search'
          type='submit'
        />
        <SearchBar onChange={onSearchChange} value={inputValue} />
      </form>
      <NavbarProfile uid={auth?.uid} photoURL={auth?.photoURL} />
    </nav>
  );
};

export default memo(Navbar);
