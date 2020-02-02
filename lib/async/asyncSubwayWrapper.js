"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = asyncSubwayWrapper;

var _asyncWrapper = _interopRequireDefault(require("./asyncWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Wrapper for Asynchronous Load of Baidu Map
 * @author terencewu
 */
function asyncSubwayWrapper(WrappedComponent) {
  return (0, _asyncWrapper["default"])(WrappedComponent, {
    isBMapAvailable: function isBMapAvailable() {
      if (typeof BMapSub === 'undefined') {
        // eslint-disable-line no-undef
        return false;
      }

      return BMapSub.Subway !== undefined; // eslint-disable-line no-undef
    }
  });
}