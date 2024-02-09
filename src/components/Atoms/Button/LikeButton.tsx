// LikeButton.tsx

import { Button, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <Button
      onClick={onClick}
      colorScheme={isLiked ? "red" : "gray"}
      leftIcon={<Icon as={FaHeart} />}
      variant={isLiked ? "solid" : "outline"}
    >
      {isLiked ? "いいね済み" : "いいねする"}
    </Button>
  );
};
