'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _MovieController = require('../controllers/MovieController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_MovieController.list);

var router = _express2.default.Router();

router.get("/api/movies", _MovieController.list);
router.get("/api/movies/:id", _MovieController.show);
router.post("/api/movies", _MovieController.create);
router.delete("/api/movies/:id", _MovieController.remove);

exports.default = router;