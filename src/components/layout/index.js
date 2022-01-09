import React from "react"
import OuterLayout from "./layout"

const Layout = ({ children, regions, country, handleRegionChange }) => {
  return (
    <OuterLayout
      regions={regions}
      country={country}
      handleRegionChange={handleRegionChange}
    >
      {children}
    </OuterLayout>
  )
}

export default Layout
