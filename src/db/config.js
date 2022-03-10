module.exports = {
  development: {
    database: "ImLazyDb",
    use_env_variable: "DATABASE_DEV_URL",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
