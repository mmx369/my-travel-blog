const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: process.env.MONGODB_USERNAME,
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_clastername: process.env.MONGODB_CLASTER,
        mongodb_database: process.env.MONGODB_DB_DEV,
      },
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clastername: process.env.MONGODB_CLASTER,
      mongodb_database: process.env.MONGODB_DB_PROD,
    },
  }
}
