import React, { useReducer } from "react"

const actions = {
  SET_VARIANT: "SET_VARIANT",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
}

export const defaultProductContext = {
  variantId: null,
  quantity: 1,
  selectVariant: _ => {},
  updateQuantity: () => {},
  dispatch: () => {},
}

const ProductContext = React.createContext(defaultProductContext)
export default ProductContext

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      }
    case actions.SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
      }
    default:
      break
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultProductContext)

  const selectVariant = id => {
    dispatch({ type: actions.SET_VARIANT, payload: id })
  }

  const updateQuantity = quantity => {
    dispatch({ type: actions.UPDATE_QUANTITY, payload: quantity })
  }

  return (
    <ProductContext.Provider
      value={{
        ...state,
        selectVariant,
        updateQuantity,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
