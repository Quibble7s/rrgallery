import React from 'react';
import Config from '../components/Config/Config';

import '../sass/components/Config/config.scss';

const UserConfig = () => {
  const onFileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    const raw = e.target.value.split('\\');
    const full = raw[raw.length - 1].split('.');
    const ext = `.${full[full.length - 1]}`;
    let name = '';
    for (let i = 0; i < full.length - 1; i++) {
      name += full[i];
    }
    console.log(name);
    console.log(ext);
  };
  return (
    <div className='container'>
      <Config />
      <label htmlFor='file'>Select image</label>
      <input
        type='file'
        name='image'
        id='file'
        accept='image/png, image/gif, image/jpeg'
        onChange={onFileSelectedHandler}
      />
    </div>
  );
};

export default UserConfig;
