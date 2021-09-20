import React from "react";

import "../../sass/components/Input/searchbar.scss";

const SearchBar = () => {
  return (
    <input
      className='searchbar input input-field-white input-field--color-white input-field--placeholder-white'
      name='searchbar'
      id='searchbar'
      type='text'
      placeholder='search...'
      required
    />
  );
};

export default SearchBar;
