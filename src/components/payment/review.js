import { Flex, Image, Text } from "@theme-ui/components"
import React, { useMemo } from "react"

const Review = ({ cart }) => {
  const item = useMemo(() => {
    return cart.items[0]
  }, [cart.items])

  return (
    <Flex
      sx={{
        alignItems: "top",
      }}
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        sx={{
          height: "90px",
          width: "50%",
          borderRadius: "4px",
          objectFit: "contain",
          objectPosition: "center center",
        }}
      />
      <Flex
        sx={{
          flex: 1,
          flexDirection: "column",
          fontWeight: "500",
          fontSize: ".8em",
          paddingLeft: "20px",
        }}
      >
        <Text sx={{ fontWeight: 550, marginBottom: "10px" }}>{item.title}</Text>
        <Flex
          sx={{
            width: "100%",
            fontWeight: 300,
            justifyContent: "space-between",
          }}
        >
          <Text sx={{ marginBottom: "15px" }}>
            <Text sx={{ color: "#B0B0B0" }}>Size: </Text>
            {item.variant.title}
          </Text>
        </Flex>
        <Text sx={{ fontWeight: 300 }}>
          <Text sx={{ color: "#B0B0B0" }}>Quantity: </Text>
          {item.quantity}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Review
