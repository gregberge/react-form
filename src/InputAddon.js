import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'

import Input from './Input'

export default createReactClass({
  displayName: 'InputAddon',

  propTypes: {
    children: PropTypes.node,
    control: PropTypes.instanceOf(Input),
    className: PropTypes.string,
  },

  mixins: [PureRenderMixin],

  render() {
    const {
      /* eslint-disable no-unused-vars */
      control,
      /* eslint-enable no-unused-vars */
      children,
      className,
      ...props
    } = this.props
    const spanProps = {
      ...props,
      className: classNames('input-group-addon', className),
    }

    return <span {...spanProps}>{children}</span>
  },
})
