import { useState } from "react";

const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useState(initialValue);

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
};

export default useGeceModu;
