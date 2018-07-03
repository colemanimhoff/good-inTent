module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/good-intent',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
}
