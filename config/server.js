module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('DOMAIN'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '39b26596fc46f45f8fbeb694772ca8de'),
    },
  },
});
