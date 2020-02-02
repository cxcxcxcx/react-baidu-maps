"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' ? Component : 'Component');
};

var _default = getDisplayName;
exports["default"] = _default;