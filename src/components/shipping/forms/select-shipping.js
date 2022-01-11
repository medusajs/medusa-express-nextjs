import React, { useEffect, useState } from "react"
import { Box, Flex, Text } from "@theme-ui/components"
import { formatAmount, useCart, useCartShippingOptions } from "medusa-react"

const ShippingOption = ({ selected, option, region, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      sx={{
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: selected ? 600 : 350,
        width: "100%",
        height: "40px",
        border: selected ? "2px solid #111827;" : "1px solid #E5E7EB",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "4px",
        mt: "8px",
      }}
      value={option?.id}
    >
      {option && region && (
        <>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "12px",
                height: "12px",
                bg: selected ? "black" : "white",
                border: selected ? "none" : "1px solid #D1D5DB;",
                borderRadius: "50%",
              }}
            >
              {selected && (
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    bg: "white",
                    borderRadius: "50%",
                  }}
                />
              )}
            </Flex>
            <Text sx={{ mx: "1rem" }}>{option.name}</Text>
          </Flex>
          <Text sx={{ color: selected ? "primary" : "#6B7280" }}>
            {formatAmount({
              amount: option.amount,
              region,
            })}
          </Text>
        </>
      )}
    </Flex>
  )
}

const SelectShipping = ({ formik, name, set, region }) => {
  const { cart } = useCart()
  const { shipping_options } = useCartShippingOptions(cart.id)

  const handleClick = async id => {
    const alreadySelected = cart?.shipping_methods?.some(
      so => id === so.shipping_option_id
    )

    if (alreadySelected) {
      return
    }

    formik.setFieldValue(`${set}.${name}`, id)
  }

  useEffect(() => {
    if (shipping_options?.length) {
      handleClick(shipping_options[0].id)
    }
  }, [shipping_options])

  return (
    <Flex sx={{ flexDirection: "column" }}>
      {shipping_options?.map(s => (
        <ShippingOption
          key={s.id}
          onClick={() => handleClick(s.id)}
          selected={s.id === formik.values[set][name]}
          option={s}
          region={region}
        />
      ))}
    </Flex>
  )
}

export default SelectShipping
