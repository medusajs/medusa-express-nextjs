import { Box, Flex, Select, Text } from "@theme-ui/components"
import { useRouter } from "next/router"
import React from "react"

const RegionSelector = ({ selected, regions, handleRegionChange }) => {
  const router = useRouter()

  const handleChange = e => {
    const countryCode = e.currentTarget.value
    const reg = regions.find(r => {
      return r.countries.some(c => c.iso_2 === countryCode)
    })

    handleRegionChange(reg.id, countryCode)
    router.push(`/${router.query.handle}`)
  }

  return (
    <Flex
      sx={{
        alignItems: "center",
        mt: "24px",
      }}
    >
      <Text
        sx={{
          color: "#9CA3AF",
          fontSize: "12px",
          mr: "4px",
        }}
      >
        Country:
      </Text>
      <Select
        value={selected}
        id="region-select"
        onChange={e => handleChange(e)}
        arrow={
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#6B7280"
            sx={{
              alignSelf: "center",
              pointerEvents: "none",
            }}
          >
            <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
          </Box>
        }
        sx={{
          width: "auto",
          backgroundColor: "#F3F4F6",
          border: "1px solid #F3F4F6",
          color: "#6B7280",
          fontSize: "12px",
          fontWeight: "bold",
          padding: 0,
          outline: "none",
          textAlign: "left",
        }}
      >
        {regions?.length &&
          regions.map((r, i) => {
            return r.countries.map(country => {
              return (
                <option key={country.iso_2} value={country.iso_2}>
                  {country.display_name}
                </option>
              )
            })
          })}
      </Select>
    </Flex>
  )
}

export default RegionSelector
