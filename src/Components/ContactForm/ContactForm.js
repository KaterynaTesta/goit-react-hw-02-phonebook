import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactStyled from './ContactFormStyled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) {
      return;
    }
    this.props.onSubmitData({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <ContactStyled>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input type="text" value={name} name="name" onChange={this.handleChange} />
          <h2>Number</h2>
          <input type="text" name="number" value={number} onChange={this.handleChange} />
          <p></p>
          <button type="submit"> Add new contact </button>
        </form>
      </ContactStyled>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;
