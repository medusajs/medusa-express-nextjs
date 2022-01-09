import { Box, Image } from "@theme-ui/components"
import React from "react"
import logo from "../../icons/logo.svg"
import medusaSmall from "../../icons/medusa-small.svg"
import logoText from "../../icons/logo-name.svg"

const Logo = () => {
  return (
    <Box>
      <Image
        src={logo}
        sx={{
          height: "75px",
          width: "auto",
        }}
      />
    </Box>
  )
}

export const MedusaLogo = () => {
  return (
    <Box sx={{ marginRight: "4px", height: "16px", width: "15px" }}>
      <Image
        src={medusaSmall}
        sx={{
          height: "100%",
          width: "auto",
        }}
      />
    </Box>
  )
}

export const LogoText = () => {
  return (
    <Box sx={{ marginRight: "10px", height: "33px", marginBottom: "10px  " }}>
      <Image
        src={logoText}
        sx={{
          height: "100%",
          width: "auto",
        }}
      />
    </Box>
  )
}

export default Logo
