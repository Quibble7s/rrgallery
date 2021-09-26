import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import ImageButton from "../Buttons/ImageButton";
import SearchBar from "../Input/SearchBar";
import NavbarProfile from "./NavbarProfile";

import searchImage from "../../assets/img/search.svg";

import "../../sass/components/Navbar/navbar.scss";
import { ClearImages, GetSearchImages } from "../../helpers/Actions/Images";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const { q = "", p = "" } = queryString.parse(location.search);
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const [inputValue, setInputValue] = useState("");

  const onSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(ClearImages());
    dispatch(GetSearchImages(inputValue, 1));
    history.replace(`/search?q=${encodeURI(inputValue.toLowerCase())}&p=${1}`);
  };

  return (
    <nav className='nav'>
      <Link className='text--decoration-none' to='/'>
        <h1 className='text text--size-title text--color-white'>rrgallery</h1>
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
      <NavbarProfile uid={auth.uid} photoURL={auth.photoURL} />
    </nav>
  );
};

export default Navbar;
