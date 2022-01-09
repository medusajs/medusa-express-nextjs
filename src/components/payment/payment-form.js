import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Box, Button, Flex, Text } from "@theme-ui/components"
import { useCart } from "medusa-react"
import React, { useState } from "react"

const PaymentForm = ({ session, handleSubmit, setLoading }) => {
  const [errorMessage, setErrorMessage] = useState()

  const { cart } = useCart()
  const stripe = useStripe()
  const elements = useElements()

  const handlePayment = async e => {
    e.preventDefault()

    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    const { client_secret } = session.data
    const email = cart.email
    const address = cart.shipping_address

    return stripe
      .confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: address.fullName,
            email: email,
            phone: address.phone,
            address: {
              city: address.city,
              country: address.country,
              line1: address.line1,
              line2: address.line2,
              postal_code: address.postal,
            },
          },
        },
      })
      .then(async ({ error, paymentIntent }) => {
        if (error) {
          setLoading(false)
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            return handleSubmit()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return handleSubmit()
        }

        return
      })
  }

  return (
    <form onSubmit={handlePayment}>
      {errorMessage && <Text sx={{ fontSize: "10px" }}>{errorMessage}</Text>}
      <Box variant="box.paymentField">
        <CardElement />
      </Box>
      <Flex>
        <Button variant="cta">Complete order</Button>
      </Flex>
    </form>
  )
}
export default PaymentForm
