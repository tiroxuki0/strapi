// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1338),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', 'a93dfffa9294a6b5ad4450a77d2eb07f'),
//     },
//   },
// });
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});