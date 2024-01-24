import React, { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDefaultShow } from "../../../hooks/useDefaultShow";

type Props = {
  title: string;
  openText: string;
  closeText: string;
  secondlyActionText?: string;
  onClick?: () => void;
  children: ReactNode;
  size: string;
  buttonWidth: string;
};
export const FirstShowModal = ({
  title,
  openText,
  secondlyActionText,
  closeText,
  onClick,
  children,
  size,
  buttonWidth,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDefaultShow();
  return (
    <>
      <Button width={buttonWidth} onClick={onOpen}>
        {openText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {closeText}
            </Button>
            {onClick ? (
              <Button variant="ghost" onClick={onClick}>
                {secondlyActionText}
              </Button>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
