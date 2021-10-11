import React from 'react';
import Lottie from 'react-lottie';

import noResultsFoundAnim from '../../models/animations/no_results_anim.json';

const NoResultsFound = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: { ...noResultsFoundAnim },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '512px',
  };

  return (
    <div className='contaner --center --h-100'>
      <Lottie
        style={defaultStyle}
        options={defaultOptions}
        isClickToPauseDisabled={true}
      />
      <h1 className='text text--color-gray text--size-subtitle'>
        No results found
      </h1>
    </div>
  );
};

export default NoResultsFound;
