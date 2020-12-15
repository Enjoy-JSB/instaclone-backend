"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  User: {
    posts: function posts(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.user({
        id: id
      }).posts();
    },
    following: function following(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.user({
        id: id
      }).following();
    },
    followers: function followers(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.user({
        id: id
      }).followers();
    },
    likes: function likes(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.user({
        id: id
      }).likes();
    },
    comments: function comments(_ref5) {
      var id = _ref5.id;
      return _prismaClient.prisma.user({
        id: id
      }).comments();
    },
    rooms: function rooms(_ref6) {
      var id = _ref6.id;
      return _prismaClient.prisma.user({
        id: id
      }).rooms();
    },
    fullName: function fullName(parent) {
      return "".concat(parent.firstName, " ").concat(parent.lastName);
    },
    postsCount: function postsCount(_ref7) {
      var id = _ref7.id;
      return _prismaClient.prisma.postsConnection({
        where: {
          user: {
            id: id
          }
        }
      }).aggregate().count();
    },
    followingCount: function followingCount(_ref8) {
      var id = _ref8.id;
      return _prismaClient.prisma.usersConnection({
        where: {
          followers_some: {
            id: id
          }
        }
      }).aggregate().count();
    },
    followersCount: function followersCount(_ref9) {
      var id = _ref9.id;
      return _prismaClient.prisma.usersConnection({
        where: {
          following_none: {
            id: id
          }
        }
      }).aggregate().count();
    },
    isFollowing: function isFollowing(parent, _, _ref10) {
      var request = _ref10.request;
      var user = request.user;
      var parentId = parent.id;
      return _prismaClient.prisma.$exists.user({
        AND: [{
          id: parentId
        }, {
          followers_some: {
            id: user.id
          }
        }]
      });
    },
    isSelf: function isSelf(parent, _, _ref11) {
      var request = _ref11.request;
      var user = request.user;
      var parentId = parent.id;
      return user.id === parentId;
    }
  }
};
exports["default"] = _default;