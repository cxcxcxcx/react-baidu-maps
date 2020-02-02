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

var _typeTransform = require("../utils/typeTransform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * GroundOverlay
 * @author terencewu
 */
var controlledPropTypes = {
  bounds: _propTypes["default"].shape(_MapPropTypes.Bounds),
  opacity: _propTypes["default"].number,
  imageUrl: _propTypes["default"].string,
  displayOnMinLevel: _propTypes["default"].number,
  dispalyOnMaxLevel: _propTypes["default"].number
};
var controlledPropUpdater = {
  bounds: function bounds(obj, arg) {
    obj.setBounds((0, _typeTransform.toBMapBounds)(arg));
  },
  opacity: function opacity(obj, arg) {
    obj.setOpacity(arg);
  },
  imageUrl: function imageUrl(obj, arg) {
    obj.setImageURL(arg);
  },
  displayOnMinLevel: function displayOnMinLevel(obj, arg) {
    obj.setDisplayOnMinLevel(arg);
  },
  dispalyOnMaxLevel: function dispalyOnMaxLevel(obj, arg) {
    obj.setDispalyOnMaxLevel(arg);
  }
};
var publicMethodMap = ['getBounds', 'getOpacity', 'getImageURL', 'getDisplayOnMinLevel', 'getDispalyOnMaxLevel', 'show', 'hide'];
var eventMap = ['click', 'dblclick'];

var Ground =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ground, _React$Component);

  function Ground() {
    _classCallCheck(this, Ground);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ground).apply(this, arguments));
  }

  _createClass(Ground, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.ground;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var bounds = this.props.bounds; // eslint-disable-line react/prop-types

      this.ground = new BMap.GroundOverlay((0, _typeTransform.toBMapBounds)(bounds)); // eslint-disable-line no-undef

      this.props[_constants.MAP].addOverlay(this.ground);
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

  return Ground;
}(_react["default"].Component);

_defineProperty(Ground, "propTypes", _defineProperty({}, _constants.MAP, _propTypes["default"].object));

var _default = (0, _wrapClass["default"])(Ground, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;