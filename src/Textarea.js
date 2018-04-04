import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Formsy from './formsy-react'
import ControlWrapper from './ControlWrapper'
import ControlMixin from './ControlMixin'

export default createReactClass({
  displayName: 'Textarea',

  propTypes: {
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    this.changeValue(event.target.value)
  },

  render() {
    const { maxLength, rows, placeholder } = this.props
    const { onChange } = this

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <textarea {...this.getControlProps()} {...{ maxLength, rows, placeholder, onChange }} />
      </ControlWrapper>
    )
  },
})
