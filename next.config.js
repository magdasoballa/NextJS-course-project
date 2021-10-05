const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sobala",
        mongodb_password: "minionki",
        mongodb_clustername: "cluster0",
        mongodb_database: "myFirstDatabase-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "sobala",
      mongodb_password: "minionki",
      mongodb_clustername: "cluster0",
      mongodb_database: "myFirstDatabase",
    },
  };
};
