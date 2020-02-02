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
 * NavigationControl
 * @author terencewu
 */
var controlledPropTypes = {
  type: _propTypes["default"].oneOf(['large', 'small', 'pan', 'zoom'])
};
var controlledPropUpdater = {
  type: function type(obj, arg) {
    obj.setType((0, _typeTransform.getNavigationControlType)(arg));
  }
};
var publicMethodMap = ['getType'];

var NavigationControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationControl, _React$Component);

  function NavigationControl() {
    _classCallCheck(this, NavigationControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationControl).apply(this, arguments));
  }

  _createClass(NavigationControl, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.navigationControl;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          type = _this$props.type,
          anchor = _this$props.anchor,
          offset = _this$props.offset,
          showZoomInfo = _this$props.showZoomInfo,
          enableGeolocation = _this$props.enableGeolocation; // eslint-disable-line react/prop-types

      var option = {};

      if (type) {
        option.type = (0, _typeTransform.getNavigationControlType)(type);
      }

      if (anchor) {
        option.anchor = (0, _typeTransform.getControlAnchor)(anchor);
      }

      if (offset) {
        option.offset = (0, _typeTransform.toBMapSize)(offset);
      }

      if (showZoomInfo !== undefined) {
        option.showZoomInfo = showZoomInfo;
      }

      if (enableGeolocation !== undefined) {
        option.enableGeolocation = enableGeolocation;
      }

      this.navigationControl = new BMap.NavigationControl(option); // eslint-disable-line no-undef

      this.props[_constants.MAP].addControl(this.navigationControl);
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

  return NavigationControl;
}(_react["default"].Component);

_defineProperty(NavigationControl, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, "anchor", _propTypes["default"].oneOf(['top_left', 'top_right', 'bottom_left', 'bottom_right'])), _defineProperty(_defineProperty2, "offset", _propTypes["default"].shape(_MapPropTypes.Size)), _defineProperty(_defineProperty2, "showZoomInfo", _propTypes["default"].bool), _defineProperty(_defineProperty2, "enableGeolocation", _propTypes["default"].bool), _defineProperty2));

var _default = (0, _wrapClass["default"])(NavigationControl, controlledPropTypes, controlledPropUpdater, publicMethodMap);

exports["default"] = _default;