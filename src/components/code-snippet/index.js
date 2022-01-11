import React from "react"
import { Box, Flex, Text } from "theme-ui"

const CodeSnippet = ({ children, type, ...rest }) => {
  let content = children

  if (typeof children === "string") {
    if (type === "cli") {
      let lines = children.split("\n")
      content = lines.map(l => {
        return (
          <Flex sx={{ cursor: "pointer", userSelect: "all" }} key={l}>
            <Text
              sx={{
                userSelect: "none",
              }}
              mr={"1em"}
              color="gold"
            >
              $
            </Text>
            <Text>{l}</Text>
          </Flex>
        )
      })
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        fontSize: "14px",
        fontFamily: "monospace",
        borderRadius: "5px",
        padding: "16px",
        backgroundColor: "primary",
        color: "#ececec",
      }}
      {...rest}
    >
      {content}
    </Box>
  )
}

export default CodeSnippet
