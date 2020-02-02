"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = asyncWrapper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getDisplayName = _interopRequireDefault(require("../utils/getDisplayName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * Wrapper for Asynchronous Load of Baidu Map
 * @author terencewu
 */
function asyncWrapper(WrappedComponent, extraProps) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Container, _Component);

    function Container(props) {
      var _this;

      _classCallCheck(this, Container);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));
      _this.isUnmounted = false;
      _this.handleLoaded = _this.handleLoaded.bind(_assertThisInitialized(_this));
      _this.state = {
        loading: true
      };
      return _this;
    }

    _createClass(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.loadMap();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.isUnmounted = true;
      }
    }, {
      key: "loadMap",
      value: function loadMap() {
        var _this2 = this;

        var _this$props = this.props,
            useScriptjs = _this$props.useScriptjs,
            mapUrl = _this$props.mapUrl;

        if (this.isBMapAvailable()) {
          this.handleLoaded();
          return;
        }

        if (window.loadingMap) {
          setTimeout(function () {
            _this2.loadMap();
          }, 300);
        } else if (useScriptjs) {
          window.loadingMap = true;

          var scriptjs = require('scriptjs'); // eslint-disable-line global-require


          scriptjs(mapUrl, function () {
            delete window.loadingMap;
          });
          setTimeout(function () {
            _this2.handleLoaded();
          }, 300);
        } else if (!window.initBaiduMap) {
          window.loadingMap = true;

          window.initBaiduMap = function () {
            delete window.loadingMap;
          };

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = "".concat(mapUrl, "&callback=initBaiduMap");
          document.body.appendChild(script);
          setTimeout(function () {
            _this2.handleLoaded();
          }, 300);
        }
      }
    }, {
      key: "handleLoaded",
      value: function handleLoaded() {
        var _this3 = this;

        if (!this.isBMapAvailable()) {
          setTimeout(function () {
            _this3.handleLoaded();
          }, 300);
          return;
        }

        if (this.isUnmounted) {
          return;
        }

        this.setState({
          loading: false
        }, function () {
          var onMapSrcLoaded = _this3.props.onMapSrcLoaded;

          if (onMapSrcLoaded) {
            onMapSrcLoaded();
          }
        });
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        return this["wrappedInstanceMap".concat(this.props.id)];
      }
    }, {
      key: "isBMapAvailable",
      value: function isBMapAvailable() {
        if (extraProps && extraProps.isBMapAvailable !== undefined) {
          return extraProps.isBMapAvailable();
        }

        if (typeof BMap === 'undefined') {
          // eslint-disable-line no-undef
          return false;
        }

        return BMap.Map !== undefined; // eslint-disable-line no-undef
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _this$props2 = this.props,
            useScriptjs = _this$props2.useScriptjs,
            mapUrl = _this$props2.mapUrl,
            loadingElement = _this$props2.loadingElement,
            onMapSrcLoaded = _this$props2.onMapSrcLoaded,
            restProps = _objectWithoutProperties(_this$props2, ["useScriptjs", "mapUrl", "loadingElement", "onMapSrcLoaded"]);

        var loading = this.state.loading;

        if (!loading) {
          return _react["default"].createElement(WrappedComponent, _extends({
            ref: function ref(instance) {
              return _this4["wrappedInstanceMap".concat(_this4.props.id)] = instance;
            }
          }, restProps)); // eslint-disable-line react/prop-types
        }

        return loadingElement;
      }
    }]);

    return Container;
  }(_react.Component), _defineProperty(_class, "displayName", "asyncWrapper(".concat((0, _getDisplayName["default"])(WrappedComponent), ")")), _defineProperty(_class, "propTypes", {
    useScriptjs: _propTypes["default"].bool,
    mapUrl: _propTypes["default"].string.isRequired,
    loadingElement: _propTypes["default"].element.isRequired,
    onMapSrcLoaded: _propTypes["default"].func,
    isBMapAvailable: _propTypes["default"].func
  }), _defineProperty(_class, "defaultProps", {
    useScriptjs: false
  }), _temp;
}