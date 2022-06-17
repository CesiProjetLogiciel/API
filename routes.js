module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/deliveries', require('./routes/deliveries.route'));
  app.use('/logs', require('./routes/logs.route'));
  app.use('/notifications', require('./routes/notifications.route'));
  app.use('/oauth', require('./routes/oauth.route'));
  app.use('/orders', require('./routes/orders.route'));
  app.use('/paypal', require('./routes/paypal.route'));
  app.use('/performance', require('./routes/performance.route'));
  app.use('/register', require('./routes/register.route'));
  app.use('/restaurants', require('./routes/restaurants.route'));
  app.use('/sales', require('./routes/sales.route'));
  app.use('/users', require('./routes/users.route'));

};
