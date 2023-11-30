import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "#08131A", // デフォルトのテキスト色を青に変更
        fontSize: "18px", // デフォルトのフォントサイズを18pxに変更
        // 他のデフォルトのスタイルもここで変更可能
      },
    },
  },
});

export default theme;
