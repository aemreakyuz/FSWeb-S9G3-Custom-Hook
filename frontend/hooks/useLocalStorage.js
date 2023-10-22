import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const readFromLS = () => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [value, setValue] = useState(() => {
    const lsOrDie = readFromLS() || initialValue;
    localStorage.setItem(key, JSON.stringify(initialValue));
    return lsOrDie;
  });

  const writeToLS = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, writeToLS];
}

export default useLocalStorage;