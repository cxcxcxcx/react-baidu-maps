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
 * Label
 * @author terencewu
 */
var controlledPropTypes = {
  position: _propTypes["default"].shape(_MapPropTypes.Point),
  style: _propTypes["default"].object,
  content: _propTypes["default"].string,
  offset: _propTypes["default"].shape(_MapPropTypes.Size),
  title: _propTypes["default"].string,
  enableMassClear: _propTypes["default"].bool,
  zIndex: _propTypes["default"].number
};
var controlledPropUpdater = {
  position: function position(obj, arg) {
    obj.setPosition((0, _typeTransform.toBMapPoint)(arg));
  },
  style: function style(obj, arg) {
    obj.setStyle(arg);
  },
  content: function content(obj, arg) {
    obj.setContent(arg);
  },
  offset: function offset(obj, arg) {
    obj.setOffset((0, _typeTransform.toBMapSize)(arg));
  },
  title: function title(obj, arg) {
    obj.setTitle(arg);
  },
  enableMassClear: function enableMassClear(obj, arg) {
    if (arg) obj.enableMassClear();else obj.disableMassClear();
  },
  zIndex: function zIndex(obj, arg) {
    obj.setZIndex(arg);
  }
};
var publicMethodMap = ['getPosition', 'getOffset', 'getTitle', 'getMap', 'show', 'hide'];
var eventMap = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'rightclick'];

var Label =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Label, _React$Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.label;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var position = this.props.position; // eslint-disable-line react/prop-types

      this.label = new BMap.Label((0, _typeTransform.toBMapPoint)(position)); // eslint-disable-line no-undef

      this.props[_constants.MAP].addOverlay(this.label);
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

  return Label;
}(_react["default"].Component);

_defineProperty(Label, "propTypes", _defineProperty({}, _constants.MAP, _propTypes["default"].object));

var _default = (0, _wrapClass["default"])(Label, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;