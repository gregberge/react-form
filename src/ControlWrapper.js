import React, {PropTypes} from 'react';
import Col from 'react-bootstrap/lib/Col';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ControlWrapper',

  propTypes: {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    componentId: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    label: PropTypes.string
  },

  mixins: [PureRenderMixin],

  render() {
    const {componentId, label, children} = this.props;
    const className = classNames({
      'has-error': this.props.hasError
    }, this.props.className);

    if (label)
      return (
        <div {...{className: classNames(className, 'form-group')}}>
          <Col
            className="control-label"
            componentClass="label"
            htmlFor={componentId}
            sm={3}
          >
            {label}
          </Col>
          <Col sm={9}>
            {children}
          </Col>
        </div>
      );

    return (
      <span {...{className}}>
        {children}
      </span>
    );
  }
});
