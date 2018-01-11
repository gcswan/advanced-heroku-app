"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.create = create;
exports.show = show;
exports.list = list;
exports.remove = remove;

var _MovieModel = require("../models/MovieModel");

var _MovieModel2 = _interopRequireDefault(_MovieModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(request, response) {
  var movie = new _MovieModel2.default(request.body);
  var movieWithUser = (0, _assign2.default)(movie, { userId: request.user._id });
  movieWithUser.save().then(function (movie) {
    return response.json(movie);
  });
}

function show(request, response) {

  var id = request.params.id;
  _MovieModel2.default.findById(id).exec().then(function (movie) {
    return response.json(movie);
  });
}

function list(request, response) {
  // console.log("this is the list controller logging the user's request id: ", request.user._id);

  _MovieModel2.default.find({ userId: request.user._id }).exec().then(function (movies) {
    console.log("this is the list controller logging the movies found: ", movies);
    return response.json(movies);
  });
}

function remove(request, response) {
  var id = request.params.id;
  console.log("remove controller logging id: ", request);
  _MovieModel2.default.findByIdAndRemove(id).exec().then(function (movie) {
    return response.json(movie);
  });
}