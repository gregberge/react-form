import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

import Input from './Input';

export default React.createClass({
  displayName: 'InputAddon',

  propTypes: {
    children: PropTypes.node,
    control: PropTypes.instanceOf(Input),
    className: PropTypes.string
  },

  mixins: [PureRenderMixin],

  render() {
    const {children, className, control, ...props} = this.props;
    const spanProps = {
      ...props,
      className: classNames('input-group-addon', className)
    };

    return <span {...spanProps}>{children}</span>;
  }
});
