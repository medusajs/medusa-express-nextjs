import Head from "next/head"
import React, { useState } from "react"
import Layout from "../components/layout"
import Steps from "../components/steps"
import { client } from "../utils/client"

const ProductPage = ({ product, regions }) => {
  const [region, setRegion] = useState(regions?.[0] || null)
  const [country, setCountry] = useState(region?.countries?.[0].iso_2 || "")

  const handleRegionChange = (regId, countryCode) => {
    const selected = regions.find(r => r.id === regId)
    setCountry(countryCode)
    setRegion(selected)
  }

  return (
    <>
      <Layout
        regions={regions}
        country={country}
        handleRegionChange={handleRegionChange}
      >
        <Head>
          <title>Medusa Express - {product.title}</title>
          <meta name="description" content={product?.description || ""} />
        </Head>
        <Steps
          product={product}
          regions={regions}
          region={region}
          country={country}
        />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const { products } = await client.products.list()

  const paths = products
    .map(product => ({
      params: { handle: product.handle },
    }))
    .filter(p => !!p.params.handle)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const response = await client.products.list({ handle: params.handle })
  const { regions } = await client.regions.list()

  // handles are unique, so we'll always only be fetching a single product
  const [product] = response.products

  // Pass post data to the page via props
  return { props: { product, regions } }
}

export default ProductPage
