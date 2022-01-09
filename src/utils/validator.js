import * as Yup from "yup"

export const AddressSchema = Yup.object({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  company: Yup.string().optional(),
  address_1: Yup.string().required("Required"),
  address_2: Yup.string().optional(),
  postal_code: Yup.number().required("Required"),
  city: Yup.string().required("Required"),
  country_code: Yup.string().required("Required"),
})

export const ContactSchema = Yup.object({
  email: Yup.string().email("Not a valid email").required("Required"),
})

export const ShippingSchema = Yup.object({
  option_id: Yup.string().required("You must select a shipping option"),
})

export const Validator = Yup.object({
  contact: ContactSchema,
  address: AddressSchema,
  shipping: ShippingSchema,
})

export const DiscountSchema = Yup.string().required("Required")
