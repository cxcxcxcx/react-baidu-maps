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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * InfoWindow
 * @author terencewu
 */
var controlledPropTypes = {
  size: _propTypes["default"].shape(_MapPropTypes.Size),
  title: _propTypes["default"].string,
  content: _propTypes["default"].string,
  enableMaximize: _propTypes["default"].bool,
  maxContent: _propTypes["default"].string,
  enableAutoPan: _propTypes["default"].bool,
  enableCloseOnClick: _propTypes["default"].bool
};
var controlledPropUpdater = {
  size: function size(obj, arg) {
    obj.setWidth(arg.width);
    obj.setHeight(arg.height);
  },
  title: function title(obj, arg) {
    obj.setTitle(arg);
  },
  content: function content(obj, arg) {
    obj.setContent(arg);
  },
  enableMaximize: function enableMaximize(obj, arg) {
    if (arg) obj.enableMaximize();else obj.disableMaximize();
  },
  maxContent: function maxContent(obj, arg) {
    obj.setMaxContent(arg);
  },
  enableAutoPan: function enableAutoPan(obj, arg) {
    if (arg) obj.enableAutoPan();else obj.disableAutoPan();
  },
  enableCloseOnClick: function enableCloseOnClick(obj, arg) {
    if (arg) obj.enableCloseOnClick();else obj.disableCloseOnClick();
  }
};
var publicMethodMap = ['redraw', 'getTitle', 'getContent', 'getPosition', 'isOpen', 'maximize', 'restore'];
var eventMap = ['close', 'open', 'maximize', 'restore', 'clickclose'];

var InfoWindow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoWindow, _React$Component);

  function InfoWindow(props) {
    var _this;

    _classCallCheck(this, InfoWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoWindow).call(this, props));
    _this.openWindow = _this.openWindow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoWindow, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.infoWindow;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.configWindow(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.configWindow(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props[_constants.MARKER]) {
        this.props[_constants.MARKER].removeEventListener('click', this.openWindow);
      }
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
    key: "configWindow",
    value: function configWindow(props) {
      if (this.infoWindow && this.infoWindow.isOpen()) {
        this.props[_constants.MAP].closeInfoWindow();
      }

      var position = props.position,
          content = props.content,
          maxWidth = props.maxWidth,
          offset = props.offset,
          enableMessage = props.enableMessage,
          message = props.message; // eslint-disable-line react/prop-types

      var options = {};

      if (maxWidth !== undefined) {
        options.maxWidth = maxWidth;
      }

      if (offset !== undefined) {
        options.offset = (0, _typeTransform.toBMapSize)(offset);
      }

      if (enableMessage !== undefined) {
        options.enableMessage = enableMessage;
      }

      if (message !== undefined) {
        options.message = message;
      }

      this.infoWindow = new BMap.InfoWindow(content, options); // eslint-disable-line no-undef

      if (this.props[_constants.MARKER]) {
        this.props[_constants.MARKER].addEventListener('click', this.openWindow);
      } else if (position !== undefined) {
        this.props[_constants.MAP].openInfoWindow(this.infoWindow, (0, _typeTransform.toBMapPoint)(position));
      }
    }
  }, {
    key: "openWindow",
    value: function openWindow() {
      this.props[_constants.MAP].openInfoWindow(this.infoWindow, (0, _typeTransform.toBMapPoint)(this.props[_constants.MARKER].getPosition()));
    }
  }]);

  return InfoWindow;
}(_react["default"].Component);

_defineProperty(InfoWindow, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, _constants.MARKER, _propTypes["default"].object), _defineProperty(_defineProperty2, "position", _propTypes["default"].shape(_MapPropTypes.Point)), _defineProperty(_defineProperty2, "maxWidth", _propTypes["default"].number), _defineProperty(_defineProperty2, "offset", _propTypes["default"].shape(_MapPropTypes.Size)), _defineProperty(_defineProperty2, "enableMessage", _propTypes["default"].bool), _defineProperty(_defineProperty2, "message", _propTypes["default"].string), _defineProperty2));

var _default = (0, _wrapClass["default"])(InfoWindow, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;