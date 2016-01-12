import {PropTypes} from 'react';

export default {
  propTypes: {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    value: PropTypes.string,
    wrapperClassName: PropTypes.string
  },

  getDefaultProps() {
    return {
      className: 'form-control'
    };
  },

  /**
   * Get an array of options from props.
   *
   * @returns {{value: string, label: string}[]}
   */
  getOptions() {
    const {options} = this.props;

    if (!Array.isArray(options))
      return Object.keys(options)
        .map(key =>
          ({value: String(key), label: options[key]})
        );

    return options.map(entry =>
      entry = typeof entry === 'string' ? ({value: entry, label: entry}) : entry
    );
  },

  // from https://github.com/twisty/formsy-react-components/
  hashString(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = (((hash << 5) - hash) + string.charCodeAt(i)) & 0xFFFFFFFF;
    }
    return hash;
  },

  // from https://github.com/twisty/formsy-react-components/
  getId() {
    return this.props.id
      || this.props.name.split('[').join('_').replace(']', '')
        + this.hashString(JSON.stringify(this.props));
  },

  getControlProps() {
    const {className, name, value} = this.props;
    return {className, id: this.getId(), name, value};
  },

  getWrapperProps() {
    const {label, wrapperClassName} = this.props;
    const hasError = !this.isValid() && !this.isPristine();
    return {componentId: this.getId(), className: wrapperClassName, hasError, label};
  },

  changeValue(nextValue) {
    const prevValue = this.getValue();

    if (String(prevValue) === String(nextValue))
      return;

    this.setValue(nextValue);

    if (this.props.onChange)
      this.props.onChange(nextValue);
  }
};
