import React from "react";

import "../../sass/components/Input/button.scss";
import "../../sass/text.scss";

const Button = ({ value, className, onClick = () => null, type = "" }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {value}
    </button>
  );
};

export default Button;
