let ApiListToExport = {
  staging: require("./api.staging.json"),
  production: require("./api.production.json"),
}

const env = process.env.NODE_ENV || "development"

export default ApiListToExport[env]
