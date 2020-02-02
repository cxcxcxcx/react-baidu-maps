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
 * Marker
 * @author terencewu
 */
var controlledPropTypes = {
  position: _propTypes["default"].shape(_MapPropTypes.Point),
  icon: _propTypes["default"].shape(_MapPropTypes.Icon),
  offset: _propTypes["default"].shape(_MapPropTypes.Size),
  label: _propTypes["default"].shape(_MapPropTypes.Label),
  title: _propTypes["default"].string,
  onTop: _propTypes["default"].bool,
  enableDragging: _propTypes["default"].bool,
  enableMassClear: _propTypes["default"].bool,
  zIndex: _propTypes["default"].number,
  animation: _propTypes["default"].oneOf(['drop', 'bounce']),
  rotation: _propTypes["default"].number,
  shadow: _propTypes["default"].shape(_MapPropTypes.Icon)
};
var controlledPropUpdater = {
  position: function position(obj, arg) {
    obj.setPosition((0, _typeTransform.toBMapPoint)(arg));
  },
  icon: function icon(obj, arg) {
    obj.setIcon((0, _typeTransform.toBMapIcon)(arg));
  },
  offset: function offset(obj, arg) {
    obj.setOffset((0, _typeTransform.toBMapSize)(arg));
  },
  label: function label(obj, arg) {
    obj.setLabel((0, _typeTransform.toBMapLabel)(arg));
  },
  title: function title(obj, arg) {
    obj.setTitle(arg);
  },
  onTop: function onTop(obj, arg) {
    obj.setTop(arg);
  },
  enableDragging: function enableDragging(obj, arg) {
    if (arg) obj.enableDragging();else obj.disableDragging();
  },
  enableMassClear: function enableMassClear(obj, arg) {
    if (arg) obj.enableMassClear();else obj.disableMassClear();
  },
  zIndex: function zIndex(obj, arg) {
    obj.setZIndex(arg);
  },
  animation: function animation(obj, arg) {
    obj.setAnimation((0, _typeTransform.getMarkerAnimation)(arg));
  },
  rotation: function rotation(obj, arg) {
    obj.setRotation(arg);
  },
  shadow: function shadow(obj, arg) {
    obj.setShadow((0, _typeTransform.toBMapIcon)(arg));
  }
};
var publicMethodMap = ['openInfoWindow', 'closeInfoWindow', 'getIcon', 'getPosition', 'getOffset', 'getLabel', 'getTitle', 'getMap', 'addContextMenu', 'removeContextMenu', 'setAnimation', 'getRotation', 'getShadow', 'show', 'hide'];
var eventMap = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'infowindowclose', 'infowindowopen', 'dragstart', 'dragging', 'dragend', 'rightclick'];

var Marker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Marker, _React$Component);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: "getInstanceFromComponent",
    value: function getInstanceFromComponent(component) {
      return component.marker;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var position = this.props.position; // eslint-disable-line react/prop-types

      this.marker = new BMap.Marker((0, _typeTransform.toBMapPoint)(position)); // eslint-disable-line no-undef

      if (this.props[_constants.MARKER_CLUSTERER]) {
        this.props[_constants.MARKER_CLUSTERER].addMarker(this.marker);
      } else {
        this.props[_constants.MAP].addOverlay(this.marker);
      }

      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // eslint-disable-line react/prop-types

      var marker = this.marker;

      if (children) {
        return _react["default"].createElement("div", null, _react["default"].Children.map(children, function (child) {
          var hasPropTypes = child.type.propTypes && child.type.propTypes[_constants.MARKER] !== undefined;

          if (!hasPropTypes) {
            return child;
          }

          return _react["default"].cloneElement(child, _defineProperty({}, _constants.MARKER, marker));
        }));
      }

      return false;
    }
  }]);

  return Marker;
}(_react["default"].Component);

_defineProperty(Marker, "propTypes", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _constants.MAP, _propTypes["default"].object), _defineProperty(_defineProperty2, _constants.MARKER_CLUSTERER, _propTypes["default"].object), _defineProperty2));

var _default = (0, _wrapClass["default"])(Marker, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap);

exports["default"] = _default;