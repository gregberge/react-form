import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'
import Formsy from './formsy-react'
import ControlWrapper from './ControlWrapper'
import ControlMixin from './ControlMixin'

export default createReactClass({
  displayName: 'Select',

  propTypes: {
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    placeholder: PropTypes.string,
  },

  getDefaultProps() {
    return { options: [] }
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  /**
   * Render placeholder.
   *
   * @returns {ReactElement}
   */

  renderPlaceHolder() {
    const { placeholder } = this.props

    if (!placeholder) return null

    return <option value="">{placeholder}</option>
  },

  /**
   * Render options.
   *
   * @returns {ReactElement[]}
   */

  renderOptions() {
    return this.getOptions().map(this.renderOption)
  },

  /**
   * Render option.
   *
   * @returns {ReactElement}
   */

  renderOption(entry, index) {
    const props = {
      key: index,
      value: entry.value,
      ref: index,
    }
    return <option {...props}>{entry.label}</option>
  },

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    this.changeValue(event.target.value)
  },

  render() {
    const { onChange } = this

    const controlProps = this.getControlProps()
    const className = classNames(controlProps.className, { placeholder: !this.getValue() })

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <select {...controlProps} {...{ onChange, className }}>
          {this.renderPlaceHolder()}
          {this.renderOptions()}
        </select>
      </ControlWrapper>
    )
  },
})
