import { Box, Card, Flex, Text } from "@theme-ui/components"
import { useCart } from "medusa-react"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import PaymentDetails from "../payment/payment"
import Review from "../payment/review"
import Total from "../payment/total"
import Spinner from "../spinner/spinner"

const DeliveryReview = ({ delivery, displayCountry }) => (
  <Flex
    sx={{
      flexDirection: "column",
      borderBottom: "1px solid #E5E7EB",
      pb: "16px",
      pt: "8px",
    }}
  >
    <Text variant="subheading" sx={{ mb: "8px" }}>
      Delivery
    </Text>
    <Text variant="summary">{delivery.address_1}</Text>
    <Text variant="summary">{`${delivery.postal_code}, ${delivery.city}`}</Text>
    <Text variant="summary">{displayCountry}</Text>
  </Flex>
)

const Payment = ({ region, country, activeStep }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { cart, pay, completeCheckout } = useCart()

  const [fullCountry, setFullCountry] = useState("")

  const submitPayment = async () => {
    // set Stripe as payment provider and navigate to confirmation page to complete order
    pay.mutate(
      { provider_id: "stripe" },
      { onSuccess: () => router.push(`/completing?cid=${cart.id}`) }
    )
  }

  useEffect(() => {
    if (activeStep === "payment") {
      setFullCountry(
        region.countries.find(c => c.iso_2 === country).display_name
      )
    }
  }, [country, region, activeStep])

  return (
    <Flex variant="layout.stepContainer">
      {activeStep === "payment" ? (
        <Card variant="container">
          <Flex
            sx={{
              position: "relative",
              width: "100%",
              flexDirection: "column",
            }}
          >
            {(pay.isLoading || loading) && (
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
            <Text variant="header3">Payment</Text>
            <Box mt={"16px"}>
              <Review cart={cart} /> <Total cart={cart} />
              <DeliveryReview
                displayCountry={fullCountry}
                delivery={cart.shipping_address}
              />
              <Flex
                sx={{
                  flexDirection: "column",
                  py: "16px",
                }}
              >
                <Text variant="subheading" sx={{ mb: "8px" }}>
                  Payment method
                </Text>
                <PaymentDetails
                  handleSubmit={submitPayment}
                  setLoading={setLoading}
                />
              </Flex>
            </Box>
          </Flex>
        </Card>
      ) : (
        <Card variant="accordionTrigger">Payment</Card>
      )}
    </Flex>
  )
}

export default Payment
