import React from 'react';
import PropTypes from 'prop-types';
import wrapClass from '../utils/wrapClass';
import { MAP } from '../utils/constants';
import { Size, Bounds } from '../utils/MapPropTypes';
import { getControlAnchor, toBMapSize, toBMapBounds } from '../utils/typeTransform';

/**
 * CopyrightControl
 * @author terencewu
 */

const controlledPropTypes = {
  copyrights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    bounds: PropTypes.shape(Bounds)
  }))
};

const controlledPropUpdater = {
  copyrights(obj, arg) {
    const oldCopyrights = obj.getCopyrightCollection();
    if (oldCopyrights && oldCopyrights.length > 0) {
      obj.getCopyrightCollection().splice(0, oldCopyrights.length);
    }
    if (arg && arg.length > 0) {
      arg.forEach(item => obj.addCopyright({
        id: item.id,
        content: item.content,
        bounds: toBMapBounds(item.bounds)
      }));
    }
  }
};

const publicMethodMap = [
  'addCopyright',
  'removeCopyright',
  'getCopyright',
  'getCopyrightCollection'
];

class CopyrightControl extends React.Component {
  static propTypes = {
    [MAP]: PropTypes.object,
    anchor: PropTypes.oneOf(['top_left', 'top_right', 'bottom_left', 'bottom_right']),
    offset: PropTypes.shape(Size)
  };

  constructor(props) {
    super(props);
  }

  getInstanceFromComponent(component) {
    return component.copyrightControl;
  }

  componentDidMount() {
    const { anchor, offset } = this.props; // eslint-disable-line react/prop-types
    const option = {};
    if (anchor) {
      option.anchor = getControlAnchor(anchor);
    }
    if (offset) {
      option.offset = toBMapSize(offset);
    }
    this.copyrightControl = new BMap.CopyrightControl(option); // eslint-disable-line no-undef
    this.props[MAP].addControl(this.copyrightControl);
  }

  render() {
    const { children } = this.props; // eslint-disable-line react/prop-types
    if (children) {
      return <div>{children}</div>;
    }
    return false;
  }
}

export default wrapClass(CopyrightControl, controlledPropTypes, controlledPropUpdater, publicMethodMap);
