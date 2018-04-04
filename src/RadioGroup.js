import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Formsy from './formsy-react'

import ControlWrapper from './ControlWrapper'
import ControlMixin from './ControlMixin'

export default createReactClass({
  displayName: 'RadioGroup',

  propTypes: {
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    value: PropTypes.string,
  },

  getDefaultProps() {
    return { options: [] }
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  /**
   * Render radios.
   *
   * @returns {ReactElement[]}
   */

  renderRadios() {
    return this.getOptions().map(this.renderRadio)
  },

  /**
   * Render radio input.
   *
   * @returns {ReactElement}
   */

  renderRadio(entry, index) {
    const { className } = this.props
    const checked =
      this.props.value === undefined || this.props.value === null ? null : entry.value === this.props.value
    const props = {
      ...this.getControlProps(),
      id: null,
      className: className === 'form-control' ? null : className,
      value: entry.value,
      type: 'radio',
      checked,
      ref: index,
      onChange: this.onChange,
    }
    return (
      <label className="radio-inline" key={index}>
        <input {...props} />
        {entry.label}
      </label>
    )
  },

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    if (event.target.checked) this.changeValue(event.target.value)
  },

  render() {
    return <ControlWrapper {...this.getWrapperProps()}>{this.renderRadios()}</ControlWrapper>
  },
})
