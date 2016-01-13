import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ControlWrapper from './ControlWrapper';
import ControlMixin from './ControlMixin';
import Formsy from 'formsy-react';

export default React.createClass({
  displayName: 'Input',

  propTypes: {
    autoCorrect: PropTypes.string,
    autoComplete: PropTypes.string,
    autoCapitalize: PropTypes.string,
    autoFocus: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    type: PropTypes.string
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  getDefaultProps() {
    return {
      type: 'text'
    };
  },

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    this.changeValue(event.target.value);
  },

  render() {
    const {autoCapitalize, autoCorrect, autoComplete, autoFocus,
      maxLength, placeholder, type} = this.props;
    const {onChange} = this;
    const controlProps = {
      ...this.getControlProps(),
      autoCapitalize, autoCorrect, autoComplete, autoFocus,
      maxLength, placeholder, onChange, type
    };

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <input {...controlProps}/>
      </ControlWrapper>
    );
  }
});
