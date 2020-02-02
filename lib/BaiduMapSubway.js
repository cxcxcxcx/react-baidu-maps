"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("./utils/wrapClass"));

var _constants = require("./utils/constants");

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
 * BaiduMap Component
 * @author terencewu
 */
var controlledPropTypes = {
  city: _propTypes["default"].string,
  center: _propTypes["default"].string,
  zoom: _propTypes["default"].number
};
var controlledPropUpdater = {
  city: function city(obj, arg) {
    obj.setCity(arg);
  },
  center: function center(obj, arg) {
    obj.setCenter(arg);
  },
  zoom: function zoom(obj, arg) {
    obj.setZoom(arg);
  }
};
var publicMethodMap = ['setCity', 'getCurrentCity', 'setCenter', 'setZoom', 'getZoom', 'zoomIn', 'zoomOut', 'clearMarkers', 'openInfoWindow', 'closeInfoWindow', 'clearOverlays', 'getStation', 'addControl', 'removeControl', 'getLines'];
var eventMap = ['subwayloaded', 'tap', 'directioncomplete'];

var BaiduMapSubway =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaiduMapSubway, _React$Component);

  function BaiduMapSubway(props) {
    var _this;

    _classCallCheck(this, BaiduMapSubway);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaiduMapSubway).call(this, props));
    _this.id = props.id || 'allmap';
    return _this;
  }

  _createClass(BaiduMapSubway, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.map;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof BMapSub === 'undefined') {
        // eslint-disable-line no-undef
        console.error('BMapSub is not defined. Make sure you\'ve import script.');
        return;
      }

      var _this$props = this.props,
          defaultCity = _this$props.defaultCity,
          defaultCenter = _this$props.defaultCenter,
          defaultZoom = _this$props.defaultZoom,
          onMapInstantiated = _this$props.onMapInstantiated;
      this.map = new BMapSub.Subway(this.id, defaultCity || '131'); // eslint-disable-line no-undef

      var zoom = defaultZoom || 0.5;
      this.map.setZoom(zoom);

      if (defaultCenter !== undefined) {
        this.map.setCenter(defaultCenter);
      }

      if (onMapInstantiated) {
        onMapInstantiated(this);
      }

      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          mapContainer = _this$props2.mapContainer,
          children = _this$props2.children; // eslint-disable-line react/prop-types

      var map = this.map;

      if (!map || !children) {
        return _react["default"].cloneElement(mapContainer, {
          id: this.id
        });
      }

      return _react["default"].cloneElement(mapContainer, {
        id: this.id
      }, this.renderChildren(children, map));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children, map) {
      var _this2 = this;

      return _react["default"].Children.map(children, function (child) {
        var hasPropTypes = child.type.propTypes && child.type.propTypes[_constants.MAP] !== undefined;

        if (child.props.children) {
          return _react["default"].cloneElement(child, hasPropTypes ? _defineProperty({}, _constants.MAP, map) : {}, _this2.renderChildren(child.props.children, map));
        }

        return _react["default"].cloneElement(child, hasPropTypes ? _defineProperty({}, _constants.MAP, map) : {});
      });
    }
  }, {
    key: "getBMapSubway",
    value: function getBMapSubway() {
      return this.map;
    }
  }]);

  return BaiduMapSubway;
}(_react["default"].Component);

_defineProperty(BaiduMapSubway, "propTypes", {
  id: _propTypes["default"].string,
  mapContainer: _propTypes["default"].node.isRequired,
  defaultCity: _propTypes["default"].string,
  defaultCenter: _propTypes["default"].string,
  defaultZoom: _propTypes["default"].number,
  onMapInstantiated: _propTypes["default"].func
});

var _default = (0, _wrapClass["default"])(BaiduMapSubway, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;