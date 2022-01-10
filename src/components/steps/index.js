import { Flex } from "@theme-ui/components"
import React, { useEffect, useState } from "react"
import Payment from "./payment"
import Product from "./product"
import Shipping from "./shipping"

const Steps = ({ product, regions, country, region }) => {
  const [activeStep, setActiveStep] = useState("product")

  // When region change, we reset the checkout flow
  useEffect(() => {
    setActiveStep("product")
  }, [region])

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Product
        region={region}
        regions={regions}
        product={product}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
      />
      <Shipping
        setActiveStep={setActiveStep}
        country={country}
        activeStep={activeStep}
        region={region}
      />
      <Payment region={region} country={country} activeStep={activeStep} />
    </Flex>
  )
}

export default Steps
