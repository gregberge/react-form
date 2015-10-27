import React from 'react';
import ReactDOM from 'react-dom';

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import {Form, Input, Select} from '../../src';

const specialities = {
  doctor: 'Doctor',
  dentist: 'Dentist'
};

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
        <Form onValidSubmit={this.onValidSubmit} className="form-horizontal">
          <fieldset>
            <legend>Basic form with labels</legend>
            {this.renderSuccessMessage()}
            <Input name="name" label="Name" placeholder="Ex: Bergé" required/>
            <Input name="firstname" label="Firstname" placeholder="Ex: Greg" required/>
            <Input name="zipcode" label="Zipcode" placeholder="Ex: 91200" maxLength={6} validations="isInt" required/>
            <Select name="speciality" label="Speciality" placeholder="Choose a speciality" options={specialities} required/>
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
