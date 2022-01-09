import { Box, Text } from "@theme-ui/components"
import React, { useEffect, useState } from "react"
import Field from "./field"
import FieldSplitter from "./field-splitter"
import SelectShipping from "./select-shipping"

const Delivery = ({ formik, region, country, setLoading }) => {
  const [fullCountry, setFullCountry] = useState("")
  useEffect(() => {
    formik.setFieldValue("delivery.country_code", country)
  }, [country])

  useEffect(() => {
    setFullCountry(region.countries.find(c => c.iso_2 === country).display_name)
  }, [country, region])

  return (
    <Box as="form">
      <Text
        as="h3"
        sx={{
          mb: "8px",
        }}
        variant="subheading"
      >
        Delivery address
      </Text>
      <>
        <Field
          formik={formik}
          placeholder={"Address"}
          value={formik.values.delivery.address_1}
          name={"address_1"}
          set={"delivery"}
        />
        <FieldSplitter
          left={
            <Field
              formik={formik}
              placeholder={"Postal code"}
              value={formik.values.delivery.postal_code}
              name={"postal_code"}
              set={"delivery"}
            />
          }
          right={
            <Field
              formik={formik}
              placeholder={"City"}
              value={formik.values.delivery.city}
              name={"city"}
              set={"delivery"}
            />
          }
        />
        <Field formik={formik} value={fullCountry} disabled={true} />
        <Text mt={4} as="h3" sx={{}} variant="subheading">
          Shipping method
        </Text>
        <SelectShipping
          formik={formik}
          placeholder={"Select shipping method"}
          value={formik.values.delivery.shipping_option}
          name={"shipping_option"}
          set={"delivery"}
          region={region}
          setLoading={setLoading}
        />
      </>
    </Box>
  )
}

export default Delivery
