import { useState } from "react";

export const useDefaultShow = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false)
  }
  return {
    isOpen,
    onOpen,
    onClose
  };
};
