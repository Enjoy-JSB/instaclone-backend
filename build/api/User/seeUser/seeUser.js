"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeUser: function seeUser(_, args) {
      var userName = args.userName;
      return _prismaClient.prisma.user({
        userName: userName
      });
    }
  }
};
exports["default"] = _default;