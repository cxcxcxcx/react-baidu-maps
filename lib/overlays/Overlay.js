"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("../utils/wrapClass"));

var _constants = require("../utils/constants");

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
 * Overlay
 * @author terencewu
 */
var publicMethodMap = ['isVisible', 'show', 'hide'];

var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(Overlay).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.label;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          customConstructor = _this$props.customConstructor,
          constructorParams = _this$props.constructorParams,
          initialize = _this$props.initialize,
          draw = _this$props.draw;
      var CustomOverlayClass = this.getOverlayClass(customConstructor, initialize, draw);
      this.overlay = new CustomOverlayClass(constructorParams); // eslint-disable-line no-undef

      this.props[_constants.MAP].addOverlay(this.overlay);
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
  }, {
    key: "getOverlayClass",
    value: function getOverlayClass(customConstructor, _initialize, _draw) {
      var _class, _temp;

      return _temp = _class =
      /*#__PURE__*/
      function (_BMap$Overlay) {
        _inherits(CustomOverlay, _BMap$Overlay);

        // eslint-disable-line
        function CustomOverlay(params) {
          var _this;

          _classCallCheck(this, CustomOverlay);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomOverlay).call(this));

          if (customConstructor) {
            customConstructor(_assertThisInitialized(_this), params);
          }

          return _this;
        }

        _createClass(CustomOverlay, [{
          key: "initialize",
          value: function initialize(map) {
            if (_initialize) {
              _initialize(this, map);
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            if (_draw) {
              _draw(this);
            }
          }
        }]);

        return CustomOverlay;
      }(BMap.Overlay), _defineProperty(_class, "displayName", 'CustomOverlay'), _temp;
    }
  }]);

  return Overlay;
}(_react["default"].Component);

_defineProperty(Overlay, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, "customConstructor", _propTypes["default"].func), _defineProperty(_defineProperty2, "constructorParams", _propTypes["default"].object), _defineProperty(_defineProperty2, "initialize", _propTypes["default"].func), _defineProperty(_defineProperty2, "draw", _propTypes["default"].func), _defineProperty2));

var _default = (0, _wrapClass["default"])(Overlay, null, null, publicMethodMap);

exports["default"] = _default;