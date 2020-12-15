"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    editUser: function editUser(_, args, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      isAuthenticated(request);
      var email = args.email,
          userName = args.userName,
          firstName = args.firstName,
          lastName = args.lastName,
          bio = args.bio;
      var user = request.user;
      return _prismaClient.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          userName: userName,
          email: email,
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          avatar: avatar
        }
      });
    }
  }
};
exports["default"] = _default;