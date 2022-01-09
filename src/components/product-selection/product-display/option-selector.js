import { Box, Flex, Select, Text } from "@theme-ui/components"
import React, { useContext, useEffect, useMemo, useState } from "react"
import ProductContext from "../../../context/product-context"

const OptionSelector = ({ product }) => {
  const { quantity, updateQuantity, selectVariant } = useContext(ProductContext)
  const [options, setOptions] = useState([])
  const [selection, setSelection] = useState(JSON.stringify({}))

  useEffect(() => {
    const opts = []
    for (const option of product.options) {
      const opt = {
        title: option.title,
        id: option.id,
        values: [...new Set(option.values.map(v => v.value))],
      }
      opts.push(opt)
    }
    setOptions(opts)

    const select = {}
    for (const opt of opts) {
      select[opt.id] = opt.values[0]
    }
    setSelection(JSON.stringify(select))
  }, [product])

  const handleQuantity = e => {
    const quant = JSON.parse(e.target.value)
    updateQuantity(quant)
  }

  const handleSelect = e => {
    const pair = JSON.parse(e.target.value)
    const tmp = JSON.parse(selection)
    tmp[pair.option] = pair.value
    setSelection(JSON.stringify(tmp))
  }

  const createVariantSet = (options, variants) => {
    const set = []
    for (const variant of variants) {
      const optionSet = {}
      for (const option of variant.options) {
        const { id } = options.find(o => o.id === option.option_id)
        optionSet[id] = option.value
      }
      optionSet["variant"] = variant
      set.push(optionSet)
    }
    return set
  }

  const variantSet = useMemo(() => {
    if (product?.options && product?.variants) {
      return createVariantSet(product.options, product.variants)
    } else {
      return []
    }
  }, [product])

  useEffect(() => {
    const select = JSON.parse(selection)
    for (const variant of variantSet) {
      const keys = Object.keys(variant).filter(k => k !== "variant")
      let count = 0
      for (const key of keys) {
        count = select[key] === variant[key] ? count + 1 : 0
      }

      if (count === keys.length) {
        selectVariant(variant.variant)
      }
    }
  }, [selection])

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      {options.map((o, i) => {
        return (
          <Flex
            key={i}
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              pt: "16px",
              fontSize: "0.75em",
            }}
          >
            <Text sx={{ mb: "12px", fontWeight: "bold" }}>{o.title}</Text>
            <Select
              sx={{
                minWidth: "170px",
                height: "40px",
                border: "1px solid #E5E7EB",
                borderRadius: "4px",
                backgroundColor: "inherit",
                color: "#6B7280",
                outline: "none",
              }}
              arrow={
                <Box
                  as="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#6B7280"
                  sx={{
                    ml: -28,
                    alignSelf: "center",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                </Box>
              }
              onChange={handleSelect}
            >
              {o.values.map((v, i) => {
                return (
                  <option
                    key={i}
                    value={JSON.stringify({ option: o.id, value: v })}
                  >
                    {v}
                  </option>
                )
              })}
            </Select>
          </Flex>
        )
      })}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          pt: "16px",
          fontSize: "0.75em",
        }}
      >
        <Text sx={{ mb: "12px", fontWeight: "bold" }}>Quantity</Text>
        <Select
          defaultValue={quantity || 1}
          sx={{
            minWidth: "170px",
            height: "40px",
            border: "1px solid #E5E7EB",
            borderRadius: "4px",
            backgroundColor: "inherit",
            color: "#6B7280",
            outline: "none",
          }}
          arrow={
            <Box
              as="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#6B7280"
              sx={{
                ml: -28,
                alignSelf: "center",
                pointerEvents: "none",
              }}
            >
              <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
            </Box>
          }
          onChange={handleQuantity}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
            return (
              <option key={i} value={`${v}`}>
                {v}
              </option>
            )
          })}
        </Select>
      </Flex>
    </Flex>
  )
}

export default OptionSelector
