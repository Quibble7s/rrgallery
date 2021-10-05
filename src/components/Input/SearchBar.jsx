import React, { memo } from 'react';
import { useCallback } from 'react';

import '../../sass/components/Input/searchbar.scss';

const SearchBar = ({ value, onChange = () => null }) => {
  const onInputChange = useCallback((e) => onChange(e), [onChange]);
  return (
    <input
      onChange={onInputChange}
      className='searchbar input input-field-none input-field--color-gray input-field--placeholder-gray'
      name='searchbar'
      id='searchbar'
      type='text'
      placeholder='search...'
      value={value}
      required
    />
  );
};

export default memo(SearchBar);
