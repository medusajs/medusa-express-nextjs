const theme = {
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif",
    heading:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  breakpoints: ["720px"],
  colors: {
    primary: "#111827",
    medusaGreen: "#56FBB1",
    medusa100: "#454B54",
    deepBlue: "#0A3149",
    ui: "#F7F7FA",
    cool: "#EEF0F5",
    background: "#F7F7FA",
    salmon: "#FF9B9B",
    placeholder: "#BBBBBB",
    grey: "#E5E7EB",
    darkGrey: "#6B7280",
  },
  layout: {
    stepContainer: {
      width: "100%",
      height: "100%",
      mb: "8px",
    },
  },
  cards: {
    accordionTrigger: {
      bg: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "375px",
      borderRadius: "8px",
      transition: "all .2s linear",
      fontFamily: "Inter",
      fontWeight: "600",
      px: "24px",
      py: "16px",
    },
    container: {
      bg: "white",
      width: "375px",
      px: "24px",
      py: "16px",
      height: "auto",
      borderRadius: "8px",
      justifyContent: "center",
      transition: "all .2s linear",
    },
  },
  buttons: {
    cta: {
      bg: "primary",
      color: "white",
      fontWeight: "500",
      fontSize: "14px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      cursor: "pointer",
      "&:disabled": {
        opacity: 0.5,
        cursor: "default",
      },
    },
    incrementor: {
      bg: "transparent",
      color: "primary",
      flexGrow: "1",
      height: "33px",
      border: "none",
      borderRadius: "0 4px 4px 0",
      "&:hover": {
        bg: "ui",
      },
    },
    decrementor: {
      bg: "transparent",
      color: "primary",
      flexGrow: "1",
      height: "33px",
      border: "none",
      borderRadius: "4px 0 0 4px",
      "&:hover": {
        bg: "ui",
      },
    },
    edit: {
      bg: "transparent",
      color: "primary",
      cursor: "pointer",
      fontSize: "14px",
      textDecoration: "underline",
      padding: "0",
    },
  },
  box: {
    paymentField: {
      bg: "background",
      padding: "12px",
      fontSize: "1.1em",
      borderRadius: "5px",
      marginBottom: "20px",
    },
  },
  text: {
    fz_s: {
      fontSize: "10px",
    },
    header3: {
      fontSize: "16px",
      fontWeight: "600",
    },
    summary: {
      py: ".1em",
      fontSize: "12px",
      color: "darkGrey",
      fontFamily: "Inter",
      fontWeight: 300,
    },
    landingpageText: {
      py: ".1em",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#111827",
      fontFamily: "Inter",
      mb: "8px",
      fontWeight: 300,
      "& a": {
        fontWeight: 500,
        textDecoration: "none",
        color: "#3B82F6",
        "&:hover": {
          color: "primary",
        },
      },
    },
    landingpageLink: {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#3B82F6",
      fontFamily: "Inter",
      mb: "4px",
      fontWeight: 500,
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
    },
    termsLink: {
      textDecoration: "none",
      color: "medusa100",
    },
    confirmationHeading: {
      lineHeight: "1.8em",
    },
    confirmationText: {
      fontSize: "0.8em",
      lineHeight: "1.5em",
      fontWeight: "300",
    },
    subheading: {
      fontSize: "12px",
      fontWeight: 600,
      color: "black",
    },
  },

  forms: {
    select: {
      bg: "cool",
      border: "none",
    },
    input: {
      bg: "cool",
      border: "none",
    },
    field: {
      border: "1px solid grey",
      "::placeholder": {
        color: "darkGrey",
      },
      ":-ms-input-placeholder": {
        color: "darkGrey",
      },
      "::-ms-input-placeholder": {
        color: "darkGrey",
      },
      outline: "none",
      transition: "all .2s linear",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      background: "ui",
    },
  },
}

export default theme
