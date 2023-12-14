import { Badge } from "@chakra-ui/react";

type Props = {
  status: boolean;
};
export const StatusBadge = ({ status }: Props) => {
  if (status === true) {
    return (
      <Badge
        bgColor="green"
        color="white"
        ml="20px"
        w="90px"
        p="3px 20px"
        borderRadius="12px"
        textAlign="center"
      >
        公開中
      </Badge>
    );
  } else if (status === false) {
    return (
      <Badge
        bgColor="pink"
        color="white"
        w="90px"
        p="3px 20px"
        ml="20px"
        borderRadius="12px"
        textAlign="center"
      >
        非公開
      </Badge>
    );
  } else {
    return (
      <Badge
        bgColor="Red"
        color="white"
        ml="20px"
        w="90px"
        p="3px 20px"
        borderRadius="12px"
        textAlign="center"
      >
        その他
      </Badge>
    );
  }
};
