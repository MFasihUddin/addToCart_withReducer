import { useState } from "react";

const useToggle = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const shop = () => {
    setValue(true);
  };
  const cart = () => {
    setValue(false);
  };
  return [value, shop, cart];
};

export default useToggle;
