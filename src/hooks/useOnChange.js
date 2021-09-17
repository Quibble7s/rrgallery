import { useState } from "react";

export const useOnChange = (dataSkeleton = {}) => {
  const [data, setData] = useState(dataSkeleton);

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return [data, onChangeHandler];
};
