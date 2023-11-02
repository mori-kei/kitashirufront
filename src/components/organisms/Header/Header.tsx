import { Box, Flex, Heading, Spacer, Link, Button } from "@chakra-ui/react";
import { useAuthContext } from "../../../context/authContext";

export const Header: React.FC = () => {
  const { user, logout } = useAuthContext();
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      color="white"
      boxShadow="md"
    >
      <Heading as="h1" color={"blackAlpha.700"} size="lg">
        きたしる
      </Heading>

      {user ? (
        <Box>
          <Link mr={4} color={"blackAlpha.700"} href="#" fontWeight={600}>
            組織診断
          </Link>
          <Link mr={4} color={"blackAlpha.700"} href="#" fontWeight={600}>
            企業を見る
          </Link>
          <Link mr={4} color={"blackAlpha.700"} href="#" fontWeight={600}>
            組織文化について
          </Link>
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
    </Flex>
  );
};
