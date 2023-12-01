import React from "react";
import { NoteCard } from "../Card/NoteCard";
import { Box, Text } from "@chakra-ui/react";

export const Sidebar = () => {
  const noteUrls: Array<string> = [
    "https://note.com/embed/notes/n3c6046836223",
    "https://note.com/embed/notes/n44aada9b0da5",
    "https://note.com/embed/notes/nb70d8ffb08af",
  ];
  return (
    <Box
      width="full"
      padding={5}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="0 0 8px rgba(0,0,0,0.1)"
      bg="white"
    >
      <Text fontSize={"lg"} fontWeight={"bold"}>
        きたしるnote編集部の記事
      </Text>
      {noteUrls.map((noteUrl) => (
        <NoteCard src={noteUrl} />
      ))}
    </Box>
  );
};
