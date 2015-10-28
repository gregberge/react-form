import React from 'react';
import ReactDOM from 'react-dom';

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import {addValidationRule, Form, Input, Select, Textarea} from '../../src';

const specialities = {
  doctor: 'Doctor',
  dentist: 'Dentist'
};

addValidationRule('sameAs', (values, value, field) => value === values[field]);

const Example = React.createClass({
  displayName: 'Example',

  getInitialState() {
    return {
      success: false
    };
  },

  render() {
    return (
      <div>
        <Form ref="form" onValidSubmit={this.onValidSubmit} className="form-horizontal">
          <fieldset>
            <legend>Basic form with labels</legend>
            {this.renderSuccessMessage()}
            <Input name="name" label="Name" placeholder="Ex: Bergé" required/>
            <Input name="firstname" label="Firstname" placeholder="Ex: Greg" required/>
            <Input name="zipcode" label="Zipcode" placeholder="Ex: 91200" maxLength={6} validations="isInt" required/>
            <Select name="speciality" label="Speciality" placeholder="Choose a speciality" options={specialities} required/>
            <Textarea name="comment" label="Comment" placeholder="Any comment?" rows={5} required/>
            <div className="form-group">
              <Col smOffset={3} sm={9}>
                <Button bsStyle="primary" type="submit">Submit</Button>
                <Button bsStyle="default" type="reset">Reset</Button>
                <Button bsStyle="default" type="button" onClick={this.reset}>Programmatic reset</Button>
              </Col>
            </div>
          </fieldset>
        </Form>

        <Form className="form-horizontal">
          <fieldset>
            <legend>Custom validation</legend>
            <Input type="password" name="password" label="Password" required/>
            <Input type="password" name="confirmPassword" label="Confirm password" validations="sameAs:password" required/>
            <div className="form-group">
              <Col smOffset={3} sm={9}>
                <Button bsStyle="primary" type="submit">Submit</Button>
              </Col>
            </div>
          </fieldset>
        </Form>

        <Form className="form-horizontal">
          <fieldset>
            <legend>Simple fields without label</legend>
            <Input name="name" placeholder="Name" required/>
            <br/>
            <Input name="firstname" placeholder="Firstname" required/>
          </fieldset>
        </Form>
      </div>
    );
  },

  /**
   * Called when the form is submitted and valid.
   */

  onValidSubmit() {
    this.setState({success: true});
  },

  reset() {
    ReactDOM.findDOMNode(this.refs.form).reset();
  },

  /**
   * Render success message.
   *
   * @returns {ReactElement}
   */

  renderSuccessMessage() {
    if (!this.state.success)
      return null;

    return <Alert bsStyle="success">Your form was correctly submitted.</Alert>;
  }
});

ReactDOM.render(<Example/>, document.getElementById('example'));
