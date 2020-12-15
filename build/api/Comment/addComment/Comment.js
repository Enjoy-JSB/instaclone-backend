"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Comment: {
    user: function user(parent) {
      return _prismaClient.prisma.comment({
        id: parent.id
      }).user();
    },
    post: function post(parent) {
      return _prismaClient.prisma.comment({
        id: parent.id
      }).post();
    }
  }
};
exports["default"] = _default;