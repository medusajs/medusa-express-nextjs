import React, { useState } from "react"
import { Flex } from "@theme-ui/components"
import Spinner from "../spinner/spinner"
import Forms from "./forms"

const ShippingAndInfo = ({ country, region, nextStep }) => {
  const [loading, setLoading] = useState(false)

  return (
    <Flex
      sx={{
        position: "relative",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {loading && (
        <Flex
          sx={{
            position: "absolute",
            bg: "#ffffff",
            opacity: 0.8,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </Flex>
      )}
      <Forms
        region={region}
        country={country}
        nextStep={nextStep}
        setLoading={setLoading}
      />
    </Flex>
  )
}

export default ShippingAndInfo
