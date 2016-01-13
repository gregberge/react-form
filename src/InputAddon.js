import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default React.createClass({
  displayName: 'InputAddon',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  mixins: [PureRenderMixin],

  render() {
    const props = {
      ...this.props,
      className: classNames('input-group-addon', this.props.className)
    };

    return <span {...props}>{this.props.children}</span>;
  }
});
