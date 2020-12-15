"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _prismaClient = require("../generated/prisma-client");

require("./env");

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _shcema = _interopRequireDefault(require("./shcema"));

var _passport2 = require("./passport");

var _middlewares = require("./middlewares");

var _upload = require("./upload");

var PORT = process.env.PORT || 4000;
var server = new _graphqlYoga.GraphQLServer({
  schema: _shcema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request,
      isAuthenticated: _middlewares.isAuthenticated
    };
  }
});
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport2.authenticateJwt);
server.express.post("/api/upload", _upload.uploadMiddleware, _upload.uploadController);
server.start({
  port: PORT
}, function () {
  return console.log("Server running on port http://localhost:".concat(PORT));
});