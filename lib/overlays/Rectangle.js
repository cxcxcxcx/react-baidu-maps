"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("../utils/wrapClass"));

var _constants = require("../utils/constants");

var _MapPropTypes = require("../utils/MapPropTypes");

var _defineProperty2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Rectangle
 * @author terencewu
 */
var controlledPropTypes = {
  strokeColor: _propTypes["default"].string,
  fillColor: _propTypes["default"].string,
  strokeOpacity: _propTypes["default"].number,
  fillOpacity: _propTypes["default"].number,
  strokeWeight: _propTypes["default"].number,
  strokeStyle: _propTypes["default"].oneOf(['solid', 'dashed']),
  enableEditing: _propTypes["default"].bool,
  enableMassClear: _propTypes["default"].bool
};
var controlledPropUpdater = {
  strokeColor: function strokeColor(obj, arg) {
    obj.setStrokeColor(arg);
  },
  fillColor: function fillColor(obj, arg) {
    obj.setFillColor(arg);
  },
  strokeOpacity: function strokeOpacity(obj, arg) {
    obj.setStrokeOpacity(arg);
  },
  fillOpacity: function fillOpacity(obj, arg) {
    obj.setFillOpacity(arg);
  },
  strokeWeight: function strokeWeight(obj, arg) {
    obj.setStrokeWeight(arg);
  },
  strokeStyle: function strokeStyle(obj, arg) {
    obj.setStrokeStyle(arg);
  },
  enableEditing: function enableEditing(obj, arg) {
    if (arg) obj.enableEditing();else obj.disableEditing();
  },
  enableMassClear: function enableMassClear(obj, arg) {
    if (arg) obj.enableMassClear();else obj.disableMassClear();
  }
};
var publicMethodMap = ['getPath', 'getStrokeColor', 'getFillColor', 'getStrokeOpacity', 'getFillOpacity', 'getStrokeWeight', 'getStrokeStyle', 'getBounds', 'setPositionAt', 'getMap', 'show', 'hide'];
var eventMap = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];

var Rectangle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rectangle, _React$Component);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.rectangle;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var bounds = this.props.bounds;
      var points = [new BMap.Point(bounds.sw.lng, bounds.sw.lat), // eslint-disable-line no-undef
      new BMap.Point(bounds.ne.lng, bounds.sw.lat), // eslint-disable-line no-undef
      new BMap.Point(bounds.ne.lng, bounds.ne.lat), // eslint-disable-line no-undef
      new BMap.Point(bounds.sw.lng, bounds.ne.lat) // eslint-disable-line no-undef
      ];
      this.rectangle = new BMap.Polygon(points); // eslint-disable-line no-undef

      this.props[_constants.MAP].addOverlay(this.rectangle);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // eslint-disable-line react/prop-types

      if (children) {
        return _react["default"].createElement("div", null, children);
      }

      return false;
    }
  }]);

  return Rectangle;
}(_react["default"].Component);

_defineProperty(Rectangle, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, "bounds", _propTypes["default"].shape(_MapPropTypes.Bounds)), _defineProperty2));

var _default = (0, _wrapClass["default"])(Rectangle, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;