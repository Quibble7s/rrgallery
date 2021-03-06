import React, { useState, memo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import arrowUp from '../../assets/img/arrow-up.svg';

import '../../sass/components/GoToTop/gototop.scss';

const GoToTop = () => {
  const [visible, setVisible] = useState('go-to-top go-to-top--fade-out');

  const activeOnScroll = useCallback(() => {
    const activeHeight = 250;
    if (window.scrollY >= activeHeight) {
      setVisible('go-to-top go-to-top--fade-in');
    } else {
      setVisible('go-to-top go-to-top--fade-out');
    }
  }, [setVisible]);

  useEffect(() => {
    window.addEventListener('scroll', activeOnScroll);
    return () => {
      window.removeEventListener('scroll', activeOnScroll);
    };
  }, [activeOnScroll]);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={visible}>
      <img className='go-to-top__img' src={arrowUp} alt='top' />
    </button>
  );
};

export default memo(GoToTop);
