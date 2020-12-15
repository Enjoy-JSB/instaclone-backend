"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadController = exports.uploadMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_ACCESS_KEY_SECRET,
  region: "ap-northeast-2"
});
var upload = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    bucket: "insta-clone-js",
    metadata: function metadata(req, file, cb) {
      return cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      return cb(null, Date.now().toString());
    }
  })
}); // const upload = multer({ dest: "uploads/" });

var uploadMiddleware = upload.single("file");
exports.uploadMiddleware = uploadMiddleware;

var uploadController = function uploadController(req, res) {
  var location = req.file.location;
  console.log(location);
  res.json({
    location: location
  });
};

exports.uploadController = uploadController;