import React, { memo } from 'react';
import Lottie from 'react-lottie';

import loadingAnim from '../../models/animations/loading_anim.json';

import '../../sass/components/Loading/loading.scss';

const Loading = ({ className, maxWidth }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: { ...loadingAnim },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: maxWidth,
  };

  return (
    <div className={className}>
      <Lottie
        style={defaultStyle}
        options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default memo(Loading);
