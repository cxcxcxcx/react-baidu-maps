"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("../utils/wrapClass"));

var _constants = require("../utils/constants");

var _CurveLine = _interopRequireDefault(require("../addons/CurveLine"));

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
 * Curve
 * @author terencewu
 */
var controlledPropTypes = {
  path: _propTypes["default"].arrayOf(_propTypes["default"].shape(_MapPropTypes.Point)),
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
  path: function path(obj, arg) {
    obj.setCurvePath(arg.map(function (point) {
      return (0, _typeTransform.toBMapPoint)(point);
    }));
  },
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
var publicMethodMap = ['getPath', 'getStrokeColor', 'getStrokeOpacity', 'getStrokeWeight', 'getStrokeStyle', 'getBounds', 'setPositionAt', 'getMap', 'show', 'hide'];
var eventMap = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];

var Curve =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Curve, _React$Component);

  function Curve() {
    _classCallCheck(this, Curve);

    return _possibleConstructorReturn(this, _getPrototypeOf(Curve).apply(this, arguments));
  }

  _createClass(Curve, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.curve;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var path = this.props.path; // eslint-disable-line react/prop-types

      this.curve = new _CurveLine["default"](path.map(function (point) {
        return (0, _typeTransform.toBMapPoint)(point);
      }));

      this.props[_constants.MAP].addOverlay(this.curve);
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

  return Curve;
}(_react["default"].Component);

_defineProperty(Curve, "propTypes", _defineProperty({}, _constants.MAP, _propTypes["default"].object));

var _default = (0, _wrapClass["default"])(Curve, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;