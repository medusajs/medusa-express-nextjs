import { Box, Button, Divider, Text } from "@theme-ui/components"
import { useFormik } from "formik"
import { useCart } from "medusa-react"
import React, { useState } from "react"
import * as Yup from "yup"
import Contact from "./contact"
import Delivery from "./delivery"

const Forms = ({ country, region, nextStep, setLoading }) => {
  const { updateCart, addShippingMethod, cart } = useCart()

  const [isValid, setIsValid] = useState({
    contact: false,
    delivery: false,
  })

  const handleSubmit = e => {
    e.preventDefault()
    formik.submitForm()
  }

  const formik = useFormik({
    initialValues: {
      contact: {
        first_name: cart?.shipping_address?.first_name || "",
        last_name: cart?.shipping_address?.last_name || "",
        email: cart?.email || "",
        phone: cart?.shipping_address?.phone || "",
      },
      delivery: {
        address_1: cart?.shipping_address?.address_1 || "",
        postal_code: cart?.shipping_address?.postal_code || "",
        city: cart?.shipping_address?.city || "",
        country_code: cart?.shipping_address?.country_code || "",
        shipping_option: cart?.shipping_methods?.[0]?.shipping_option_id || "",
      },
    },
    validationSchema: Yup.object({
      contact: Yup.object({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string()
          .email("Please provide a valid email address")
          .required("Required"),
        phone: Yup.string().optional(),
      }),
      delivery: Yup.object({
        address_1: Yup.string().required("Required"),
        postal_code: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        country_code: Yup.string().required("Required"),
        shipping_option: Yup.string().required("Required"),
      }),
    }),
    onSubmit: async values => {
      setLoading(true)
      setIsValid({ delivery: true, contact: true })

      const { delivery, contact } = values

      return updateCart
        .mutateAsync({
          email: contact.email,
          shipping_address: {
            first_name: contact.first_name,
            last_name: contact.last_name,
            address_1: delivery.address_1,
            country_code: delivery.country_code,
            postal_code: delivery.postal_code,
            province: delivery.province,
            city: delivery.city,
            phone: contact.phone,
          },
        })
        .then(() => {
          return addShippingMethod.mutateAsync({
            option_id: delivery.shipping_option,
          })
        })
        .finally(() => {
          setLoading(false)
          nextStep()
        })
    },
  })

  return (
    <Box>
      <Text variant="header3">Shipping and info</Text>
      <Box mb={4} sx={{ mb: 4, mt: "16px" }}>
        <Contact formik={formik} summarize={false} setIsValid={setIsValid} />
      </Box>

      <Box pt={1}>
        <Delivery
          region={region}
          country={country}
          formik={formik}
          isValid={isValid}
          summarize={false}
          setIsValid={setIsValid}
          setLoading={setLoading}
        />
      </Box>

      <Box>
        <>
          <Divider sx={{ color: "#E5E7EB", my: "16px" }} />
          <Button onClick={handleSubmit} variant="cta">
            Go to payment
          </Button>
        </>
      </Box>
    </Box>
  )
}

export default Forms
