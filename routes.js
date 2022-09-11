const routes = require('next-routes')();

routes.add('/posts/new', 'posts/new');
routes.add('/posts/:address', '/posts/show');
routes.add('/NoMetamask', '/NoMetamask')

module.exports = routes;
