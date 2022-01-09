import { Box, Text } from "@theme-ui/components"
import React from "react"
import Field from "./field"
import FieldSplitter from "./field-splitter"

const Contact = ({ formik, summarize = false }) => {
  return (
    <Box as="form">
      <Text
        as="h2"
        sx={{
          mb: "8px",
        }}
        variant="subheading"
      >
        Contact
      </Text>
      <FieldSplitter
        split="50/50"
        left={
          <Field
            formik={formik}
            placeholder={"First name"}
            value={formik.values.contact.first_name}
            name={"first_name"}
            set={"contact"}
          />
        }
        right={
          <Field
            formik={formik}
            placeholder={"Last name"}
            value={formik.values.contact.last_name}
            name={"last_name"}
            set={"contact"}
          />
        }
      />
      <Field
        formik={formik}
        placeholder={"Email"}
        value={formik.values.contact.email}
        name={"email"}
        set={"contact"}
      />
      <Field
        formik={formik}
        placeholder={"Phone number"}
        value={formik.values.contact.phone}
        name={"phone"}
        set={"contact"}
      />
    </Box>
  )
}

export default Contact
