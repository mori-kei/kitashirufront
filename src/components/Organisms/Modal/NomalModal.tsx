import React, { ReactNode } from "react";
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
import { InfoOutlineIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  openText: string;
  closeText: string;
  secondlyActionText?: string;
  onClick?: () => void;
  children: ReactNode;
  size: string;
  buttonWidth: string;
  infoBool?: boolean;
};
export const NomalModal = ({
  title,
  openText,
  secondlyActionText,
  closeText,
  onClick,
  children,
  size,
  buttonWidth,
  infoBool,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button width={buttonWidth} onClick={onOpen}>
        {infoBool === true ? <InfoOutlineIcon color={"blue.600"} mr={2}/> : null}{" "}
        {openText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              {closeText}
            </Button>
            {onClick ? (
              <Button colorScheme="blue" onClick={onClick}>
                {secondlyActionText}
              </Button>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
