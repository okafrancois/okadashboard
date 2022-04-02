module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61b07fd1f030a0abde236b8d7df66b7e'),
  },
});
