module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '13.214.206.253'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'econ101'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'econ1101')
    },
    debug: false,
  },
});
