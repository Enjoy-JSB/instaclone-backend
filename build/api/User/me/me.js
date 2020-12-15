"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    me: function me(_, __, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      isAuthenticated(request);
      var user = request.user;
      return _prismaClient.prisma.user({
        id: user.id
      });
    }
  }
};
exports["default"] = _default;