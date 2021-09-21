import React from "react";

import "../../sass/components/Input/searchbar.scss";

const SearchBar = ({ value, onChange = () => null }) => {
  return (
    <input
      onChange={onChange}
      className='searchbar input input-field-white input-field--color-white input-field--placeholder-white'
      name='searchbar'
      id='searchbar'
      type='text'
      placeholder='search...'
      value={value}
      required
    />
  );
};

export default SearchBar;
