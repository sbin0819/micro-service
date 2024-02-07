const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(async (req, res, next) => {
  if (await isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});
server.get('/user', (req, res) => {
  res.jsonp({
    ...req.user,
    view_count: 249,
    update_count: 100,
    courses: [
      { courseId: 1, done: true },
      { courseId: 4, done: false },
    ],
  });
});

server.get('/my-network', (req, res) => {
  res.jsonp({
    connectionCount: 811,
    contactCount: 3724,
    eventCount: 0,
    pageCount: 0,
    user: req.user,
  });
});

server.get('/apply-status', (req, res) => {
  res.jsonp({
    myJobsCount: 13,
    myOnlineClassesCount: 11,
    mySavedUpdatesCount: 1,
  });
});

server.use(jsonServer.bodyParser);
server.post('/posts', (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  req.body.author = {
    name: req.user.name,
    email: req.user.email,
    picture: req.user.picture,
  };
  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(4000, () => {
  console.log('JSON Server is running');
});

async function isAuthorized(req) {
  try {
    const Authorization = req.headers.authorization;

    const res = await fetch(
      'https://dev-d133vk8zpdg0nl38.us.auth0.com/userinfo',
      {
        headers: {
          Authorization,
        },
      }
    );

    const json = await res.json();

    req.user = json;

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
