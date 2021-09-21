import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageButton from "../Buttons/ImageButton";
import SearchBar from "../Input/SearchBar";
import NavbarProfile from "./NavbarProfile";

import "../../sass/components/Navbar/navbar.scss";
import { Search } from "../../helpers/Actions/Search";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { search } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  const onSearchChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(Search(18, 1, inputValue));
    history.replace(`/search/q=${encodeURI(inputValue)}&page=${search.page}/`);
  };
  return (
    <nav className='nav'>
      <h1 className='text text--size-title text--color-white'>rrgallery</h1>
      <form onSubmit={onSearchSubmit} className='search-form'>
        <ImageButton
          className='btn btn--circular'
          imgSrc='./assets/img/search.svg'
          value='Search'
          type='submit'
        />
        <SearchBar onChange={onSearchChange} value={inputValue} />
      </form>
      <NavbarProfile uid={auth.uid} photoURL={auth.photoURL} />
    </nav>
  );
};

export default Navbar;
