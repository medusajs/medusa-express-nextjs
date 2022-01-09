import { Flex } from "@theme-ui/components"
import React, { useEffect, useState } from "react"
import Spinner from "../spinner/spinner"
import Payment from "./payment"
import Product from "./product"
import Shipping from "./shipping"

const Steps = ({ product, regions, country, region }) => {
  const [activeStep, setActiveStep] = useState("product")
  const [loading, setLoading] = useState(false)

  // When region change, we reset the checkout flow
  useEffect(() => {
    setActiveStep("product")
  }, [region])

  return (
    <Flex sx={{ flexDirection: "column" }}>
      {loading && (
        <Flex
          sx={{
            position: "absolute",
            bg: "#ffffffaa",
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
      <Product
        region={region}
        regions={regions}
        product={product}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        setLoading={setLoading}
      />
      <Shipping
        setActiveStep={setActiveStep}
        country={country}
        activeStep={activeStep}
        region={region}
        setLoading={setLoading}
      />
      <Payment
        region={region}
        country={country}
        activeStep={activeStep}
        setLoading={setLoading}
      />
    </Flex>
  )
}

export default Steps
