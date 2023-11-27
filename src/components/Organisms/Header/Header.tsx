import { Box, Flex, Heading, Link, Button, Image } from "@chakra-ui/react";
import { useAuthContext } from "../../../context/authContext";
import { DrawerMenu } from "../DrawerMenu/DrawerMenu";
import { HoverLink } from "../../Atoms/Link/HoverLink";
import logo from "../../../images/kitashiru_logo.jpg";
export const Header: React.FC = () => {
  const { auth, logout } = useAuthContext();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      color="white"
      boxShadow="md"
      mb="30px"
    >
      <HoverLink to={"/"}>
        <Flex align={"center"}>
          <Image src={logo} w={50} />
          <Heading as="h1" color={"blackAlpha.700"} size="lg">
            きたしる
          </Heading>
        </Flex>
      </HoverLink>
      <Box display={{ base: "none", md: "block" }}>
        {auth ? (
          <Box>
            <HoverLink to="/test" mr={4}>
              組織診断
            </HoverLink>
            <HoverLink to="/test" mr={4}>
              企業を見る
            </HoverLink>
            <HoverLink to="/test" mr={4}>
              組織文化について
            </HoverLink>
            <Link mr={4} color={"blackAlpha.700"} onClick={logout} href="/">
              <Button>ログアウト</Button>
            </Link>
          </Box>
        ) : (
          <Box>
            <Link mr={4} color={"blackAlpha.700"} href="/login">
              <Button>ログイン</Button>
            </Link>
          </Box>
        )}
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <DrawerMenu />
      </Box>
    </Flex>
  );
};
