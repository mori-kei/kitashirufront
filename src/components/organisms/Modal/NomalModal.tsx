import React, { Children, ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

type Props = {
  title: string;
  openText: string;
  closeText: string;
  secondlyActionText: string;
  onClick?: () => void;
  children: ReactNode;
  size: string;
};
export const NomalModal = ({
  title,
  openText,
  secondlyActionText,
  closeText,
  onClick,
  children,
  size,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{openText}</Button>

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
