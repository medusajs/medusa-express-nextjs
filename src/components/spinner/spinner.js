import { Box } from "@theme-ui/components"
import React from "react"

const Spinner = ({ done = false }) => {
  if (done) {
    return (
      <Box
        sx={{
          width: "64px",
          height: "64px",
        }}
      >
        <Box
          as="svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            animation: "dash 5s linear forwards",
          }}
        >
          <path d="M11 32L24.4101 49L53 15" stroke="#454545" strokeWidth="3" />
        </Box>
      </Box>
    )
  }

  const inside = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "64px",
    height: "64px",
    margin: "8px",
    border: "3px solid #454545",
    borderRadius: "50%",
    animation: "lds-ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
    borderColor: "#454545 transparent transparent transparent",
    ":nth-of-type(1)": {
      animationDelay: "-0.45s",
    },
    ":nth-of-type(2)": {
      animationDelay: "-0.3s",
    },
    ":nth-of-type(3)": {
      animationDelay: "-0.15s",
    },
    "@keyframes lds-ring": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  }

  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
        width: "80px",
        height: "80px",
      }}
    >
      <Box sx={inside} />
      <Box sx={inside} />
      <Box sx={inside} />
    </Box>
  )
}

export default Spinner
