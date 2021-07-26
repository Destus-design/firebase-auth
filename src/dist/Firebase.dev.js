"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _app["default"].initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIND_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

var auth = app.auth();
exports.auth = auth;
var _default = app;
exports["default"] = _default;