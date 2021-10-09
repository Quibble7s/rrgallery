import { useState } from 'react';

export const useOnChange = (dataSkeleton = {}, maxLength = 128) => {
  const [data, setData] = useState(dataSkeleton);

  const onChangeHandler = (e) => {
    if (e.target.value.length < maxLength) {
      setData({
        ...data,
        [e.target.name]: e.target.value
          .replace('<', '')
          .replace('>', '')
          .replace('/', '')
          .replace('\\', ''),
      });
    }
  };

  return [data, onChangeHandler];
};
