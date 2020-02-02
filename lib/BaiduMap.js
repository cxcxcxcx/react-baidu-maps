"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapClass = _interopRequireDefault(require("./utils/wrapClass"));

var _constants = require("./utils/constants");

var _typeTransform = require("./utils/typeTransform");

var _MapPropTypes = require("./utils/MapPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * BaiduMap Component
 * @author terencewu
 */
var controlledPropTypes = {
  center: _propTypes["default"].shape(_MapPropTypes.Point),
  zoom: _propTypes["default"].number,
  enableDragging: _propTypes["default"].bool,
  enableScrollWheelZoom: _propTypes["default"].bool,
  enableDoubleClickZoom: _propTypes["default"].bool,
  enableKeyboard: _propTypes["default"].bool,
  enableInertialDragging: _propTypes["default"].bool,
  enableContinuousZoom: _propTypes["default"].bool,
  enablePinchToZoom: _propTypes["default"].bool,
  enableAutoResize: _propTypes["default"].bool,
  defaultCursor: _propTypes["default"].string,
  draggingCursor: _propTypes["default"].string,
  minZoom: _propTypes["default"].number,
  maxZoom: _propTypes["default"].number,
  mapStyle: _propTypes["default"].object,
  mapType: _propTypes["default"].oneOf(['normal', 'perspective', 'satellite', 'hybrid']),
  highResolutionEnabled: _propTypes["default"].bool
};
var controlledPropUpdater = {
  center: function center(obj, arg) {
    obj.centerAndZoom((0, _typeTransform.toBMapPoint)(arg), obj.getZoom());
  },
  zoom: function zoom(obj, arg) {
    obj.setZoom(arg);
  },
  enableDragging: function enableDragging(obj, arg) {
    if (arg) obj.enableDragging();else obj.disableDragging();
  },
  enableScrollWheelZoom: function enableScrollWheelZoom(obj, arg) {
    if (arg) obj.enableScrollWheelZoom();else obj.disableScrollWheelZoom();
  },
  enableDoubleClickZoom: function enableDoubleClickZoom(obj, arg) {
    if (arg) obj.enableDoubleClickZoom();else obj.disableDoubleClickZoom();
  },
  enableKeyboard: function enableKeyboard(obj, arg) {
    if (arg) obj.enableKeyboard();else obj.disableKeyboard();
  },
  enableInertialDragging: function enableInertialDragging(obj, arg) {
    if (arg) obj.enableInertialDragging();else obj.disableInertialDragging();
  },
  enableContinuousZoom: function enableContinuousZoom(obj, arg) {
    if (arg) obj.enableContinuousZoom();else obj.disableContinuousZoom();
  },
  enablePinchToZoom: function enablePinchToZoom(obj, arg) {
    if (arg) obj.enablePinchToZoom();else obj.disablePinchToZoom();
  },
  enableAutoResize: function enableAutoResize(obj, arg) {
    if (arg) obj.enableAutoResize();else obj.disableAutoResize();
  },
  defaultCursor: function defaultCursor(obj, arg) {
    obj.setDefaultCursor(arg);
  },
  draggingCursor: function draggingCursor(obj, arg) {
    obj.setDraggingCursor(arg);
  },
  minZoom: function minZoom(obj, arg) {
    obj.setMinZoom(arg);
  },
  maxZoom: function maxZoom(obj, arg) {
    obj.setMaxZoom(arg);
  },
  mapStyle: function mapStyle(obj, arg) {
    if (obj.setMapStyleV2) obj.setMapStyleV2({
      styleJson: arg
    });else obj.setMapStyle({
      styleJson: arg
    });
  },
  mapType: function mapType(obj, arg) {
    obj.setMapType((0, _typeTransform.getMapType)(arg));
  },
  highResolutionEnabled: function highResolutionEnabled(obj, arg) {
    obj.highResolutionEnabled(arg);
  }
};
var publicMethodMap = ['setPanorama', 'getBounds', 'getCenter', 'getDistance', 'getMapType', 'getSize', 'getViewport', 'getZoom', 'getPanorama', 'centerAndZoom', 'panTo', 'panBy', 'reset', 'setCenter', 'setCurrentCity', 'setMapType', 'setViewport', 'setZoom', 'zoomIn', 'zoomOut', 'addHotspot', 'removeHotspot', 'clearHotspots', 'addControl', 'removeControl', 'getContainer', 'addContextMenu', 'removeContextMenu', 'addOverlay', 'removeOverlay', 'clearOverlays', 'openInfoWindow', 'closeInfoWindow', 'pointToOverlayPixel', 'overlayPixelToPoint', 'getOverlays', 'getPanes', 'addTileLayer', 'removeTileLayer', 'getTileLayer', 'pixelToPoint', 'pointToPixel'];
var eventMap = ['click', 'dblclick', 'rightclick', 'rightdblclick', 'maptypechange', 'mousemove', 'mouseover', 'mouseout', 'movestart', 'moving', 'moveend', 'zoomstart', 'zoomend', 'addoverlay', 'addcontrol', 'removecontrol', 'removeoverlay', 'clearoverlays', 'dragstart', 'dragging', 'dragend', 'addtilelayer', 'removetilelayer', 'load', 'resize', 'hotspotclick', 'hotspotover', 'hotspotout', 'tilesloaded', 'touchstart', 'touchmove', 'touchend', 'longpress'];

var BaiduMap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaiduMap, _React$Component);

  function BaiduMap(props) {
    var _this;

    _classCallCheck(this, BaiduMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaiduMap).call(this, props));
    _this.id = props.id || 'allmap';
    _this.onAdjustBounds = _this.onAdjustBounds.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BaiduMap, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.map;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof BMap === 'undefined') {
        // eslint-disable-line no-undef
        console.error('BMap is not defined. Make sure you\'ve import script.');
        return;
      }

      var _this$props = this.props,
          defaultCenter = _this$props.defaultCenter,
          defaultZoom = _this$props.defaultZoom,
          onMapInstantiated = _this$props.onMapInstantiated,
          enableMapClick = _this$props.enableMapClick;
      this.map = new BMap.Map(this.id, {
        enableMapClick: enableMapClick
      }); // eslint-disable-line no-undef

      var center = defaultCenter || {
        lng: 116.404,
        lat: 39.915
      };
      var zoom = defaultZoom || 11;
      this.map.centerAndZoom((0, _typeTransform.toBMapPoint)(center), zoom);

      if (onMapInstantiated) {
        onMapInstantiated(this);
      }

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleRestrictedBoundsUpdate();
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
    key: "handleRestrictedBoundsUpdate",
    value: function handleRestrictedBoundsUpdate() {
      var restrictedBounds = this.props.restrictedBounds;

      if (restrictedBounds) {
        this.setRestrictedBounds();
      } else {
        this.clearRestrictedBounds();
      }
    }
  }, {
    key: "setRestrictedBounds",
    value: function setRestrictedBounds() {
      if (this.isRestricted) {
        this.clearRestrictedBounds();
      }

      this.map.addEventListener('moveend', this.onAdjustBounds);
      this.isRestricted = true;
    }
  }, {
    key: "clearRestrictedBounds",
    value: function clearRestrictedBounds() {
      if (!this.isRestricted) {
        return;
      }

      this.map.removeEventListener('moveend', this.onAdjustBounds);
      this.isRestricted = false;
    }
  }, {
    key: "onAdjustBounds",
    value: function onAdjustBounds() {
      var map = this.map;
      var bounds = (0, _typeTransform.toBMapBounds)(this.props.restrictedBounds); // eslint-disable-line react/prop-types

      if (bounds.containsBounds(map.getBounds())) {
        return;
      }

      var curBounds = map.getBounds();
      var curBoundsSW = curBounds.getSouthWest();
      var curBoundsNE = curBounds.getNorthEast();
      var boundsSW = bounds.getSouthWest();
      var boundsNE = bounds.getNorthEast();
      var boundary = {
        n: 0,
        e: 0,
        s: 0,
        w: 0
      };
      boundary.n = curBoundsNE.lat < boundsNE.lat ? curBoundsNE.lat : boundsNE.lat;
      boundary.e = curBoundsNE.lng < boundsNE.lng ? curBoundsNE.lng : boundsNE.lng;
      boundary.s = curBoundsSW.lat < boundsSW.lat ? boundsSW.lat : curBoundsSW.lat;
      boundary.w = curBoundsSW.lng < boundsSW.lng ? boundsSW.lng : curBoundsSW.lng;
      var center = new BMap.Point(boundary.w + (boundary.e - boundary.w) / 2, boundary.s + (boundary.n - boundary.s) / 2); // eslint-disable-line no-undef

      setTimeout(function () {
        map.panTo(center, {
          noAnimation: 'no'
        });
      }, 1);
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
    key: "getBMap",
    value: function getBMap() {
      return this.map;
    }
  }]);

  return BaiduMap;
}(_react["default"].Component);

_defineProperty(BaiduMap, "propTypes", {
  id: _propTypes["default"].string,
  mapContainer: _propTypes["default"].node.isRequired,
  enableMapClick: _propTypes["default"].bool,
  restrictedBounds: _propTypes["default"].shape(_MapPropTypes.Bounds),
  defaultCenter: _propTypes["default"].shape(_MapPropTypes.Point),
  defaultZoom: _propTypes["default"].number,
  onMapInstantiated: _propTypes["default"].func
});

_defineProperty(BaiduMap, "defaultProps", {
  enableMapClick: true
});

var _default = (0, _wrapClass["default"])(BaiduMap, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;