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
 * CopyrightControl
 * @author terencewu
 */
var controlledPropTypes = {
  copyrights: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number,
    content: _propTypes["default"].string,
    bounds: _propTypes["default"].shape(_MapPropTypes.Bounds)
  }))
};
var controlledPropUpdater = {
  copyrights: function copyrights(obj, arg) {
    var oldCopyrights = obj.getCopyrightCollection();

    if (oldCopyrights && oldCopyrights.length > 0) {
      obj.getCopyrightCollection().splice(0, oldCopyrights.length);
    }

    if (arg && arg.length > 0) {
      arg.forEach(function (item) {
        return obj.addCopyright({
          id: item.id,
          content: item.content,
          bounds: (0, _typeTransform.toBMapBounds)(item.bounds)
        });
      });
    }
  }
};
var publicMethodMap = ['addCopyright', 'removeCopyright', 'getCopyright', 'getCopyrightCollection'];

var CopyrightControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CopyrightControl, _React$Component);

  function CopyrightControl() {
    _classCallCheck(this, CopyrightControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(CopyrightControl).apply(this, arguments));
  }

  _createClass(CopyrightControl, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.copyrightControl;
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

      this.copyrightControl = new BMap.CopyrightControl(option); // eslint-disable-line no-undef

      this.props[_constants.MAP].addControl(this.copyrightControl);
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

  return CopyrightControl;
}(_react["default"].Component);

_defineProperty(CopyrightControl, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, "anchor", _propTypes["default"].oneOf(['top_left', 'top_right', 'bottom_left', 'bottom_right'])), _defineProperty(_defineProperty2, "offset", _propTypes["default"].shape(_MapPropTypes.Size)), _defineProperty2));

var _default = (0, _wrapClass["default"])(CopyrightControl, controlledPropTypes, controlledPropUpdater, publicMethodMap);

exports["default"] = _default;