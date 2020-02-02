"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapType = getMapType;
exports.getMarkerAnimation = getMarkerAnimation;
exports.getNavigationControlType = getNavigationControlType;
exports.getControlAnchor = getControlAnchor;
exports.getLengthUnit = getLengthUnit;
exports.getMapTypeControlType = getMapTypeControlType;
exports.toBMapPoint = toBMapPoint;
exports.toBMapSize = toBMapSize;
exports.toBMapBounds = toBMapBounds;
exports.toBMapIcon = toBMapIcon;
exports.toBMapLabel = toBMapLabel;
exports.toBMapSubwaySize = toBMapSubwaySize;
exports.toBMapSubwayIcon = toBMapSubwayIcon;
exports.getSubwayControlAnchor = getSubwayControlAnchor;

/**
 * Utilities Transformation of Baidu Map Classes
 * @author terencewu
 */
function getMapType(type) {
  var MAP = {
    normal: BMAP_NORMAL_MAP,
    // eslint-disable-line no-undef
    perspective: BMAP_PERSPECTIVE_MAP,
    // eslint-disable-line no-undef
    satellite: BMAP_SATELLITE_MAP,
    // eslint-disable-line no-undef
    hybrid: BMAP_HYBRID_MAP // eslint-disable-line no-undef

  };

  if (MAP[type]) {
    return MAP[type];
  }

  return BMAP_NORMAL_MAP; // eslint-disable-line no-undef
}

function getMarkerAnimation(animation) {
  var MAP = {
    drop: BMAP_ANIMATION_DROP,
    // eslint-disable-line no-undef
    bounce: BMAP_ANIMATION_BOUNCE // eslint-disable-line no-undef

  };

  if (MAP[animation]) {
    return MAP[animation];
  }

  return Null; // eslint-disable-line no-undef
}

function getNavigationControlType(type) {
  var MAP = {
    large: BMAP_NAVIGATION_CONTROL_LARGE,
    // eslint-disable-line no-undef
    small: BMAP_NAVIGATION_CONTROL_SMALL,
    // eslint-disable-line no-undef
    pan: BMAP_NAVIGATION_CONTROL_PAN,
    // eslint-disable-line no-undef
    zoom: BMAP_NAVIGATION_CONTROL_ZOOM // eslint-disable-line no-undef

  };

  if (MAP[type]) {
    return MAP[type];
  }

  return undefined;
}

function getControlAnchor(anchor) {
  var MAP = {
    top_left: BMAP_ANCHOR_TOP_LEFT,
    // eslint-disable-line no-undef
    top_right: BMAP_ANCHOR_TOP_RIGHT,
    // eslint-disable-line no-undef
    bottom_left: BMAP_ANCHOR_BOTTOM_LEFT,
    // eslint-disable-line no-undef
    bottom_right: BMAP_ANCHOR_BOTTOM_RIGHT // eslint-disable-line no-undef

  };

  if (MAP[anchor]) {
    return MAP[anchor];
  }

  return undefined;
}

function getLengthUnit(unit) {
  var MAP = {
    metric: BMAP_UNIT_METRIC,
    // eslint-disable-line no-undef
    imperial: BMAP_UNIT_IMPERIAL // eslint-disable-line no-undef

  };

  if (MAP[unit]) {
    return MAP[unit];
  }

  return undefined;
}

function getMapTypeControlType(type) {
  var MAP = {
    horizontal: BMAP_MAPTYPE_CONTROL_HORIZONTAL,
    // eslint-disable-line no-undef
    dropdown: BMAP_MAPTYPE_CONTROL_DROPDOWN,
    // eslint-disable-line no-undef
    map: BMAP_MAPTYPE_CONTROL_MAP // eslint-disable-line no-undef

  };

  if (MAP[type]) {
    return MAP[type];
  }

  return BMAP_MAPTYPE_CONTROL_HORIZONTAL; // eslint-disable-line no-undef
}

function toBMapPoint(arg) {
  return new BMap.Point(arg.lng, arg.lat); // eslint-disable-line no-undef
}

function toBMapSize(arg) {
  return new BMap.Size(arg.width, arg.height); // eslint-disable-line no-undef
}

function toBMapBounds(arg) {
  return new BMap.Bounds(toBMapPoint(arg.sw), toBMapPoint(arg.ne)); // eslint-disable-line no-undef
}

function toBMapIcon(arg) {
  var icon = new BMap.Icon(arg.imageUrl, toBMapSize(arg.size)); // eslint-disable-line no-undef

  if (arg.anchor) {
    icon.setAnchor(toBMapSize(arg.anchor));
  }

  if (arg.imageOffset) {
    icon.setImageOffset(toBMapSize(arg.imageOffset));
  }

  if (arg.imageSize) {
    icon.setImageSize(toBMapSize(arg.imageSize));
  }

  if (arg.infoWindowAnchor) {
    icon.setInfoWindowAnchor(toBMapSize(arg.infoWindowAnchor));
  }

  return icon;
}

function toBMapLabel(arg) {
  var label = new BMap.Label(arg.content); // eslint-disable-line no-undef

  if (arg.style) {
    label.setStyle(arg.style);
  }

  if (arg.position) {
    label.setPosition(toBMapPoint(arg.position));
  }

  if (arg.offset) {
    label.setOffset(toBMapSize(arg.offset));
  }

  if (arg.title) {
    label.setTitle(arg.title);
  }

  if (arg.enableMassClear) {
    label.enableMassClear();
  } else {
    label.disableMassClear();
  }

  if (arg.zIndex) {
    label.setZIndex(arg.zIndex);
  }

  return label;
}

function toBMapSubwaySize(arg) {
  return new BMapSub.Size(arg.width, arg.height); // eslint-disable-line no-undef
}

function toBMapSubwayIcon(arg) {
  return new BMapSub.Icon(arg.url, toBMapSubwaySize(arg.size)); // eslint-disable-line no-undef
}

function getSubwayControlAnchor(anchor) {
  var MAP = {
    top_left: BMAPSUB_ANCHOR_TOP_LEFT,
    // eslint-disable-line no-undef
    top_right: BMAPSUB_ANCHOR_TOP_RIGHT,
    // eslint-disable-line no-undef
    bottom_left: BMAPSUB_ANCHOR_BOTTOM_LEFT,
    // eslint-disable-line no-undef
    bottom_right: BMAPSUB_ANCHOR_BOTTOM_RIGHT // eslint-disable-line no-undef

  };

  if (MAP[anchor]) {
    return MAP[anchor];
  }

  return undefined;
}