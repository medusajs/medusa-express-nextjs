import { Card, Flex } from "@theme-ui/components"
import { useOrder } from "medusa-react"
import { useRouter } from "next/router"
import React from "react"
import OrderConfirmation from "../steps/order-confirmation"
import Layout from "./layout"

const CompletedLayout = () => {
  const router = useRouter()

  const { order } = useOrder(router.query.oid)

  return (
    <Layout>
      {order && (
        <Card variant="container">
          <>
            <OrderConfirmation order={order} />
            <Flex
              pt={4}
              sx={{
                flexDirection: ["column", "row"],
                fontSize: "12px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Flex>
          </>
        </Card>
      )}
    </Layout>
  )
}

export default CompletedLayout
