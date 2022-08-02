const routes = require('next-routes')();

routes.add('/posts/new', 'posts/new');
routes.add('/posts/:address', '/posts/show');

module.exports = routes;
