import { Card, Flex } from "@theme-ui/components"
import { useCart } from "medusa-react"
import Image from "next/image"
import React from "react"
import ShippingAndInfo from "../shipping"

const Shipping = ({
  region,
  country,
  activeStep,
  setActiveStep,
  setLoading,
}) => {
  const { cart } = useCart()

  const hasShipping = cart.shipping_address && cart?.shipping_methods?.length

  let triggerStyles = {}

  if (hasShipping) {
    triggerStyles.color = "darkgrey"
  }

  // Cart not initialized yet
  if (!cart?.items?.length) {
    triggerStyles.pointerEvents = "none"
  } else {
    triggerStyles.cursor = "pointer"
  }

  return (
    <Flex variant="layout.stepContainer">
      {activeStep === "shipping" ? (
        <Card variant="container">
          <ShippingAndInfo
            country={country}
            region={region}
            setLoading={setLoading}
            nextStep={() => setActiveStep("payment")}
          />
        </Card>
      ) : (
        <Card
          variant="accordionTrigger"
          onClick={() => setActiveStep("shipping")}
          sx={triggerStyles}
        >
          Shipping and info
          {hasShipping && (
            <Image src={"/check.png"} height={"11px"} width={"16px"} />
          )}
        </Card>
      )}
    </Flex>
  )
}

export default Shipping
