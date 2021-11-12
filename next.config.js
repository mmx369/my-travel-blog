const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "max",
        mongodb_password: "insert69",
        mongodb_clastername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "max",
      mongodb_password: "insert69",
      mongodb_clastername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
