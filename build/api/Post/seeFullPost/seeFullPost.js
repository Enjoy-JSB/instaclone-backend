"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeFullPost: function seeFullPost(_, args) {
      var id = args.id;
      return _prismaClient.prisma.post({
        id: id
      });
    }
  }
};
exports["default"] = _default;