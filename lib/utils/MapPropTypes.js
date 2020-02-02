"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubwayIcon = exports.SubwaySize = exports.Label = exports.Icon = exports.Bounds = exports.Size = exports.Point = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * PropTypes for Baidu Map Basic Classes
 * @author terencewu
 */
var Point = {
  lng: _propTypes["default"].number,
  lat: _propTypes["default"].number
};
exports.Point = Point;
var Size = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};
exports.Size = Size;
var Bounds = {
  sw: _propTypes["default"].shape(Point),
  ne: _propTypes["default"].shape(Point)
};
exports.Bounds = Bounds;
var Icon = {
  imageUrl: _propTypes["default"].string,
  anchor: _propTypes["default"].shape(Size),
  size: _propTypes["default"].shape(Size),
  imageOffset: _propTypes["default"].shape(Size),
  imageSize: _propTypes["default"].shape(Size),
  infoWindowAnchor: _propTypes["default"].shape(Size)
};
exports.Icon = Icon;
var Label = {
  position: _propTypes["default"].shape(Point),
  style: _propTypes["default"].object,
  content: _propTypes["default"].string,
  offset: _propTypes["default"].shape(Size),
  title: _propTypes["default"].string,
  enableMassClear: _propTypes["default"].bool,
  zIndex: _propTypes["default"].number
};
exports.Label = Label;
var SubwaySize = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};
exports.SubwaySize = SubwaySize;
var SubwayIcon = {
  url: _propTypes["default"].string,
  size: _propTypes["default"].shape(SubwaySize)
};
exports.SubwayIcon = SubwayIcon;