import { Card, Flex } from "@theme-ui/components"
import { useCart } from "medusa-react"
import Image from "next/image"
import React from "react"
import ProductSelection from "../product-selection"

const Product = ({
  product,
  regions,
  country,
  region,
  activeStep,
  setActiveStep,
  setLoading,
}) => {
  const { cart } = useCart()

  let triggerStyles = {}

  if (cart?.id) {
    triggerStyles.color = "darkgrey"
    triggerStyles.cursor = "pointer"
  }

  return (
    <Flex variant="layout.stepContainer">
      {activeStep === "product" ? (
        <Card variant="container">
          <ProductSelection
            region={region}
            regions={regions}
            country={country}
            product={product}
            nextStep={() => setActiveStep("shipping")}
            setLoading={setLoading}
          />
        </Card>
      ) : (
        <Card
          variant="accordionTrigger"
          onClick={() => setActiveStep("product")}
          sx={triggerStyles}
        >
          Product
          {cart?.id && (
            <Image src={"/check.png"} height={"18px"} width={"13px"} />
          )}
        </Card>
      )}
    </Flex>
  )
}

export default Product
