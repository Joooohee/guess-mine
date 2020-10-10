(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotifi = handleMessageNotifi;

function handleMessageNotifi(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " said ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaSIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQUEsTUFDaENDLE9BRGdDLEdBQ1ZELElBRFUsQ0FDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFFBRHVCLEdBQ1ZGLElBRFUsQ0FDdkJFLFFBRHVCO0FBRXhDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUYsUUFBZixtQkFBZ0NELE9BQWhDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZU5vdGlmaShkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfSBzYWlkICR7bWVzc2FnZX1gKTtcbn1cbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotification", _chat.handleMessageNotifi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGY4YTdjOWIuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZmkiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRDs7QUFFRCxTQUFTSSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QlIsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFFRFIsTUFBTSxDQUFDUyxFQUFQLENBQVUscUJBQVYsRUFBaUNDLHlCQUFqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZmkgfSBmcm9tIFwiLi9jaGF0XCI7XG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgc29ja2V0LmVtaXQoXCJuZXdNZXNzYWdlXCIsIHsgbWVzc2FnZSB9KTtcbiAgY29uc29sZS5sb2coYFlvdTogJHttZXNzYWdlfWApO1xufVxuXG5mdW5jdGlvbiBzZXROaWNrbmFtZShuaWNrbmFtZSkge1xuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XG59XG5cbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZmljYXRpb25cIiwgaGFuZGxlTWVzc2FnZU5vdGlmaSk7XG4iXX0=
},{"./chat":1}]},{},[2])