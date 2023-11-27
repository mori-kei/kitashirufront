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

  const { auth, logout } = useAuthContext();
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
                {auth ? (
                  <>
                    <HoverLink to="/test">組織診断</HoverLink>
                    <HoverLink to="/articles">企業を見る</HoverLink>
                    <HoverLink to="/culture">組織文化について</HoverLink>
                    <HoverLink to="/" onClick={logout}>
                      ログアウト
                    </HoverLink>
                  </>
                ) : (
                  <HoverLink to="/login">ログイン</HoverLink>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
