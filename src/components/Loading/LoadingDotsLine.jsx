import React, { memo } from "react";
import Lottie from "react-lottie";

import loadingAnim from "../../models/animations/loading_horizontal_anim.json";

const LoadingDotsLine = () => {
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
    <div className='loading --center'>
      <Lottie
        style={defaultStyle}
        options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default memo(LoadingDotsLine);
