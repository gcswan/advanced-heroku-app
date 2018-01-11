"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movieSchema = new _mongoose.Schema({
    jEntry: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: false
    },
    release_date: {
        type: String,
        required: true
    },
    vote_average: {
        type: String,
        required: true
    },
    backdrop_path: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    }

});

exports.default = _mongoose2.default.model("Movie", movieSchema);