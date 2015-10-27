import React, {PropTypes} from 'react';

import ControlWrapper from './ControlWrapper';
import ControlMixin from './ControlMixin';
import Formsy from 'formsy-react';

export default React.createClass({
  displayName: 'Textarea',

  propTypes: {
    placeholder: PropTypes.string,
    maxLength: PropTypes.number
  },

  mixins: [Formsy.Mixin, ControlMixin],

  render() {
    const {maxLength, placeholder} = this.props;
    const {onChange} = this;

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <textarea {...this.getControlProps()} {...{maxLength, placeholder, onChange}}/>
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
