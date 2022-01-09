import { Flex, Image, Text } from "@theme-ui/components"
import React from "react"
import Info from "./info"
import OptionSelector from "./option-selector"

const ProductDisplay = ({ region, product }) => {
  return product ? (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ flexDirection: "row", width: "100%", height: "100%" }}>
        <Image
          sx={{
            width: "50%",
            borderRadius: "4px",
            objectFit: "contain",
            objectPosition: "center center",
          }}
          src={product.thumbnail}
          alt={product.title}
        />
        <Info product={product} region={region} />
      </Flex>
      <Text
        sx={{
          mt: "16px",
          lineHeight: "24px",
          fontSize: "14px",
          fontWeight: 300,
          color: "#6B7280",
        }}
        variant="fz_s"
      >
        {product.description}
      </Text>
      <OptionSelector product={product} />
    </Flex>
  ) : null
}

export default ProductDisplay
