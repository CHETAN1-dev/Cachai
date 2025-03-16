// useToggle.js
import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleAccordion };
};

export default useToggle;