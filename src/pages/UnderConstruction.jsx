import React, { memo } from "react";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import Button from "../components/Buttons/Button";

import underConstructionAnim from "../models/animations/underconstruction_anim.json";

const UnderConstruction = () => {
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: { ...underConstructionAnim },
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "512px",
  };

  const onClickHandler = () => {
    history.push("/");
  };

  return (
    <div className='container --center'>
      <div className='--w-100 --center'>
        <Lottie
          style={defaultStyle}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
        <h2 className='text text--size-subtitle text--color-gray'>
          Page under construction
        </h2>
        <Button
          onClick={onClickHandler}
          className='btn btn--primary btn--radius-4 --mt-regular'
          value='Go home'
        />
      </div>
    </div>
  );
};

export default memo(UnderConstruction);
