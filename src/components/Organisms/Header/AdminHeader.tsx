import { Box, Flex, Heading, Link, Button, Image } from "@chakra-ui/react";
import { useAuthContext } from "../../../context/authContext";
import { DrawerMenu } from "../DrawerMenu/DrawerMenu";
import { HoverLink } from "../../Atoms/Link/HoverLink";
import logo from "../../../images/kitashiru_logo.jpg";
export const AdminHeader: React.FC = () => {
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
            <HoverLink to="/dashbord/articles" mr={4}>
              企業の記事
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
            <Link mr={4} href="/signup">
              <Button colorScheme="blue">新規登録</Button>
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
