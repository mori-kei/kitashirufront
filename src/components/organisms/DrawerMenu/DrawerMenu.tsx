import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuthContext } from "../../../context/authContext";
import { HoverLink } from "../../Atoms/Link/HoverLink";

export const DrawerMenu = () => {
  // useDisclosureで閉じ・開きの管理
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const { user, logout } = useAuthContext();
  return (
    <>
      {/* ハンバーガーアイコン部分 */}
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      {/* Drawer部分 */}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack as="nav">
                {user ? (
                  <>
                    <HoverLink href="/">組織診断</HoverLink>
                    <HoverLink href="/">企業を見る</HoverLink>
                    <HoverLink href="/">組織文化について</HoverLink>
                    <HoverLink href="/" onClick={logout}>
                      ログアウト
                    </HoverLink>
                  </>
                ) : (
                  <HoverLink  href="/login">ログイン</HoverLink>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
