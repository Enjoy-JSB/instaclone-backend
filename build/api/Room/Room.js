"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Room: {
    participants: function participants(parent) {
      return _prismaClient.prisma.room({
        id: parent.id
      }).participants();
    },
    messages: function messages(parent) {
      return _prismaClient.prisma.room({
        id: parent.id
      }).messages();
    }
  }
};
exports["default"] = _default;