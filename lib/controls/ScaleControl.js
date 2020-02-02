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
 * ScaleControl
 * @author terencewu
 */
var controlledPropTypes = {
  unit: _propTypes["default"].oneOf(['metric', 'imperial'])
};
var controlledPropUpdater = {
  type: function type(obj, arg) {
    obj.setUnit((0, _typeTransform.getLengthUnit)(arg));
  }
};
var publicMethodMap = ['getUnit'];

var ScaleControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScaleControl, _React$Component);

  function ScaleControl() {
    _classCallCheck(this, ScaleControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScaleControl).apply(this, arguments));
  }

  _createClass(ScaleControl, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.scaleControl;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          anchor = _this$props.anchor,
          offset = _this$props.offset; // eslint-disable-line react/prop-types

      var option = {};

      if (anchor) {
        option.anchor = (0, _typeTransform.getControlAnchor)(anchor);
      }

      if (offset) {
        option.offset = (0, _typeTransform.toBMapSize)(offset);
      }

      this.scaleControl = new BMap.ScaleControl(option); // eslint-disable-line no-undef

      this.props[_constants.MAP].addControl(this.scaleControl);
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

  return ScaleControl;
}(_react["default"].Component);

_defineProperty(ScaleControl, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, "anchor", _propTypes["default"].oneOf(['top_left', 'top_right', 'bottom_left', 'bottom_right'])), _defineProperty(_defineProperty2, "offset", _propTypes["default"].shape(_MapPropTypes.Size)), _defineProperty2));

var _default = (0, _wrapClass["default"])(ScaleControl, controlledPropTypes, controlledPropUpdater, publicMethodMap);

exports["default"] = _default;