import React from "react";
import Lottie from "react-lottie";

import loadingAnim from "../../models/animations/loading_anim.json";

import "../../sass/components/Loading/loading.scss";

const LoadingDotsCircle = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: { ...loadingAnim },
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "128px",
  };

  return (
    <div className='--full-w-h --center loading'>
      <Lottie
        style={defaultStyle}
        options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default LoadingDotsCircle;
