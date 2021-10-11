import React from 'react';

import '../../sass/components/Footer/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='text text--color-light-gray text--size-regular'>
        &copy; rrgallery - {new Date().getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
