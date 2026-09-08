const jsonServer = require("json-server");
//create server for runing jsonn file
const server = jsonServer.create();
// set up path for middleware
const route = jsonServer.router("db.json");
//create middleware
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(route);

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server Running");
});
