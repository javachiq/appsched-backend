module.exports = {
  db: {
    database: process.env.DB_NAME || 'appsched',
    user: process.env.DB_USER || 'appsched',
    password: process.env.DB_PASSWORD || 'appsched',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './appsched.sqlite'
    }
  }
};
