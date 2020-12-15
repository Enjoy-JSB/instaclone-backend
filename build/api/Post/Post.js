"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Post: {
    files: function files(parent) {
      return _prismaClient.prisma.post({
        id: parent.id
      }).files();
    },
    comments: function comments(parent) {
      return _prismaClient.prisma.post({
        id: parent.id
      }).comments();
    },
    user: function user(parent) {
      return _prismaClient.prisma.post({
        id: parent.id
      }).user();
    },
    isLiked: function isLiked(parent, _, _ref) {
      var request = _ref.request;
      var user = request.user;
      var id = parent.id;
      return _prismaClient.prisma.$exists.like({
        AND: [{
          user: {
            id: user.id
          }
        }, {
          post: {
            id: id
          }
        }]
      });
    },
    likeCount: function likeCount(parent) {
      return _prismaClient.prisma.likesConnection({
        where: {
          post: {
            id: parent.id
          }
        }
      }).aggregate().count();
    },
    commentCount: function commentCount(parent) {
      return _prismaClient.prisma.commentsConnection({
        where: {
          post: {
            id: parent.id
          }
        }
      }).aggregate().count();
    }
  }
};
exports["default"] = _default;