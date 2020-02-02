"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapClass;

/**
 * Wrap Class with Custom PropTypes, Public Methods and Events
 * @author terencewu
 */
function registerEvents(component, instance, eventMap) {
  if (eventMap && instance.addEventListener) {
    component.registeredEvents = {};
    eventMap.forEach(function (key) {
      var methodName = "on".concat(key.substr(0, 1).toUpperCase()).concat(key.substr(1));

      if (component.props[methodName] && typeof component.props[methodName] === 'function') {
        instance.addEventListener(key, component.props[methodName]);
        component.registeredEvents[key] = component.props[methodName];
      }
    });
  }
}

function unregisterEvents(component, instance) {
  if (component.registeredEvents && instance.removeEventListener) {
    Object.keys(component.registeredEvents).forEach(function (key) {
      instance.removeEventListener(key, component.registeredEvents[key]);
    });
    component.registeredEvents = null;
  }
}

function wrapControlledPropTypes(WrappedComponent, controlledPropTypes, controlledPropUpdater) {
  var getInstanceFromComponent = WrappedComponent.prototype.getInstanceFromComponent;
  var componentDidMount = WrappedComponent.prototype.componentDidMount;
  var componentDidUpdate = WrappedComponent.prototype.componentDidUpdate;

  if (!getInstanceFromComponent) {
    return WrappedComponent;
  }

  if (controlledPropTypes && Object.keys(controlledPropTypes).length > 0) {
    WrappedComponent.prototype.componentDidMount = function () {
      var _this = this;

      if (componentDidMount) {
        componentDidMount.call(this);
      }

      Object.keys(controlledPropTypes).forEach(function (key) {
        if (_this.props[key] !== undefined) {
          var fn = controlledPropUpdater[key];

          if (fn) {
            fn(getInstanceFromComponent(_this), _this.props[key]);
          }
        }
      });
    };

    WrappedComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
      var _this2 = this;

      Object.keys(controlledPropTypes).forEach(function (key) {
        var nextValue = _this2.props[key];
        var fn = controlledPropUpdater[key];

        if (fn && nextValue !== prevProps[key]) {
          fn(getInstanceFromComponent(_this2), nextValue);
        }
      });

      if (componentDidUpdate) {
        componentDidUpdate.call(this, prevProps, prevState);
      }
    };
  }

  return WrappedComponent;
}

function wrapPublicMethods(WrappedComponent, publicMethodMap) {
  var getInstanceFromComponent = WrappedComponent.prototype.getInstanceFromComponent;

  if (!getInstanceFromComponent) {
    return WrappedComponent;
  }

  if (publicMethodMap && publicMethodMap.length > 0) {
    publicMethodMap.forEach(function (key) {
      WrappedComponent.prototype[key] = function publicMethod() {
        var _getInstanceFromCompo;

        return (_getInstanceFromCompo = getInstanceFromComponent(this))[key].apply(_getInstanceFromCompo, arguments);
      };
    });
  }

  return WrappedComponent;
}

function wrapEvents(WrappedComponent, eventMap) {
  var getInstanceFromComponent = WrappedComponent.prototype.getInstanceFromComponent;
  var componentDidUpdate = WrappedComponent.prototype.componentDidUpdate;
  var componentDidMount = WrappedComponent.prototype.componentDidMount;
  var componentWillUnmount = WrappedComponent.prototype.componentWillUnmount;

  if (eventMap && eventMap.length > 0) {
    WrappedComponent.prototype.componentDidMount = function () {
      if (componentDidMount) {
        componentDidMount.call(this);
      }

      registerEvents(this, getInstanceFromComponent(this), eventMap);
    };

    WrappedComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
      unregisterEvents(this, getInstanceFromComponent(this));

      if (componentDidUpdate) {
        componentDidUpdate.call(this, prevProps, prevState);
      }

      registerEvents(this, getInstanceFromComponent(this), eventMap);
    };

    WrappedComponent.prototype.componentWillUnmount = function () {
      unregisterEvents(this, getInstanceFromComponent(this));

      if (componentWillUnmount) {
        componentWillUnmount.call(this);
      }
    };
  }

  return WrappedComponent;
}

function wrapClass(WrappedComponent, controlledPropTypes, controlledPropUpdater, publicMethodMap, eventMap) {
  var component = wrapControlledPropTypes(WrappedComponent, controlledPropTypes, controlledPropUpdater);
  component = wrapPublicMethods(component, publicMethodMap);
  component = wrapEvents(component, eventMap);
  return component;
}