import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ControlWrapper from './ControlWrapper';
import ControlMixin from './ControlMixin';
import Formsy from 'formsy-react';

export default React.createClass({
  displayName: 'Input',

  propTypes: {
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    type: PropTypes.string
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  getDefaultProps() {
    return {
      type: 'text'
    };
  },

  render() {
    const {type, maxLength, placeholder} = this.props;
    const {onChange} = this;

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <input {...this.getControlProps()} {...{type, maxLength, placeholder, onChange}}/>
      </ControlWrapper>
    );
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
