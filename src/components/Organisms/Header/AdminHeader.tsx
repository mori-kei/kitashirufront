import { Box, Flex, Heading, Link, Button, Image } from "@chakra-ui/react";
import { useAuthContext } from "../../../context/authContext";
import { DrawerMenu } from "../DrawerMenu/DrawerMenu";
import { HoverLink } from "../../Atoms/Link/HoverLink";
import logo from "../../../images/kitashiru_logo.jpg";
import { AdminDrawerMenu } from "../DrawerMenu/AdminDrawerMenu";
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
      <Flex align={"center"}>
        <Image src={logo} w={50} />

        <Heading as="h1" color={"blackAlpha.700"} size="lg">
          きたしる管理者
        </Heading>
      </Flex>
      <Box display={{ base: "none", md: "block" }}>
        {auth ? (
          <Box>
            <HoverLink to="/" mr={4}>
              掲載企業管理
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
        <AdminDrawerMenu />
      </Box>
    </Flex>
  );
};
