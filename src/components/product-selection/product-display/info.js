import { Flex, Text } from "@theme-ui/components"
import React from "react"
import { getFrom } from "../../../utils/get-from"

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
          {`${getFrom(product.variants, {
            currency_code: region.currency_code,
            tax_rate: region.tax_rate,
          })}`}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Info
