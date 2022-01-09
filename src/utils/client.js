const Medusa = require("@medusajs/medusa-js").default

const BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

const client = new Medusa({ baseUrl: BACKEND_URL })

module.exports.client = client
