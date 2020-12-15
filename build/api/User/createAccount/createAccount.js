"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var userName, email, _args$firstName, firstName, _args$lastName, lastName, bio, exists;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userName = args.userName, email = args.email, _args$firstName = args.firstName, firstName = _args$firstName === void 0 ? "" : _args$firstName, _args$lastName = args.lastName, lastName = _args$lastName === void 0 ? "" : _args$lastName, bio = args.bio;
                _context.next = 3;
                return _prismaClient.prisma.$exists.user({
                  OR: [{
                    userName: userName
                  }, {
                    email: email
                  }]
                });

              case 3:
                exists = _context.sent;

                if (!exists) {
                  _context.next = 6;
                  break;
                }

                throw Error("This userName/email is already taken");

              case 6:
                _context.next = 8;
                return _prismaClient.prisma.createUser({
                  userName: userName,
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  bio: bio
                });

              case 8:
                return _context.abrupt("return", true);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;