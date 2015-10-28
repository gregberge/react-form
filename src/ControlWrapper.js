import React, {PropTypes} from 'react';
import Col from 'react-bootstrap/lib/Col';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ControlWrapper',

  mixins: [PureRenderMixin],

  propTypes: {
    label: PropTypes.string,
    className: PropTypes.string,
    componentId: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  },

  render() {
    const {componentId, label, children} = this.props;
    const className = classNames({
      'has-error': this.props.hasError
    }, this.props.className);

    if (label)
      return (
        <div {...{className: classNames(className, 'form-group')}}>
          <Col sm={3} componentClass="label" className="control-label" htmlFor={componentId}>
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
