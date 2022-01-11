import { Flex, Text } from "@theme-ui/components"
import { formatVariantPrice } from "medusa-react"
import React from "react"

const Info = ({ product, region }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        height: "100%",
        px: "16px",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            mb: "8px",
            color: "#6B7280",
          }}
        >
          {product?.collection?.title || ""}
        </Text>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            mb: "8px",
          }}
        >
          {product.title}
        </Text>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            mb: "1em",
          }}
        >
          {`${formatVariantPrice({
            variant: product.variants[0],
            region,
          })}`}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Info
