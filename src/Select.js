import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ControlWrapper from './ControlWrapper';
import ControlMixin from './ControlMixin';
import Formsy from 'formsy-react';

export default React.createClass({
  displayName: 'Select',

  propTypes: {
    options: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  },

  getDefaultProps() {
    return {options: []};
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  render() {
    const {} = this.props;
    const {onChange} = this;

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <select {...this.getControlProps()} {...{onChange}}>
          {this.renderPlaceHolder()}
          {this.renderOptions()}
        </select>
      </ControlWrapper>
    );
  },

  /**
   * Render placeholder.
   *
   * @returns {ReactElement}
   */

  renderPlaceHolder() {
    const {placeholder} = this.props;

    if (!placeholder)
      return null;

    return <option value="">{placeholder}</option>;
  },

  /**
   * Render options.
   *
   * @returns {ReactElement[]}
   */

  renderOptions() {
    const {options} = this.props;

    if (!Array.isArray(options))
      return Object.keys(options)
        .map((key, index) =>
          this.renderOption({value: key + '', label: options[key]}, index)
        );

    return options.map(this.renderOption);
  },

  /**
   * Render option.
   *
   * @returns {ReactElement}
   */

  renderOption(entry, key) {
    entry = typeof entry === 'string' ? ({entry, label: entry}) : entry;
    const props = {
      key,
      value: entry.value
    };
    return <option {...props}>{entry.label}</option>;
  },

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    this.changeValue(event.target.value);
  }
});
