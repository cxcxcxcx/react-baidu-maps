"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("../utils/wrapClass"));

var _constants = require("../utils/constants");

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
 * MarkerClusterer
 * @author terencewu
 */
var controlledPropTypes = {
  gridSize: _propTypes["default"].number,
  maxZoom: _propTypes["default"].number,
  minClusterSize: _propTypes["default"].number,
  styles: _propTypes["default"].object
};
var controlledPropUpdater = {
  gridSize: function gridSize(obj, arg) {
    obj.setGridSize(arg);
  },
  maxZoom: function maxZoom(obj, arg) {
    obj.setMaxZoom(arg);
  },
  minClusterSize: function minClusterSize(obj, arg) {
    obj.setMinClusterSize(arg);
  },
  styles: function styles(obj, arg) {
    obj.setStyles(arg);
  }
};
var publicMethodMap = ['getMap', 'addMarker', 'addMarkers', 'clearMarkers', 'getClustersCount', 'isAverageCenter', 'removeMarker', 'removeMarkers'];

var MarkerClusterer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarkerClusterer, _React$Component);

  function MarkerClusterer(props) {
    var _this;

    _classCallCheck(this, MarkerClusterer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkerClusterer).call(this, props));

    require('../addons/BaiduMarkerClusterer'); // eslint-disable-line global-require


    _this.markerClusterer = new BMapLib.MarkerClusterer(_this.props[_constants.MAP], {}); // eslint-disable-line no-undef

    return _this;
  }

  _createClass(MarkerClusterer, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.markerClusterer;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // eslint-disable-line react/prop-types

      var markerClusterer = this.markerClusterer;

      if (children) {
        return _react["default"].createElement("div", null, _react["default"].Children.map(children, function (child) {
          var hasPropTypes = child.type.propTypes && child.type.propTypes[_constants.MARKER_CLUSTERER] !== undefined;
          return _react["default"].cloneElement(child, hasPropTypes ? _defineProperty({}, _constants.MARKER_CLUSTERER, markerClusterer) : {});
        }));
      }

      return false;
    }
  }]);

  return MarkerClusterer;
}(_react["default"].Component);

_defineProperty(MarkerClusterer, "propTypes", _defineProperty({}, _constants.MAP, _propTypes["default"].object));

var _default = (0, _wrapClass["default"])(MarkerClusterer, controlledPropTypes, controlledPropUpdater, publicMethodMap);

exports["default"] = _default;