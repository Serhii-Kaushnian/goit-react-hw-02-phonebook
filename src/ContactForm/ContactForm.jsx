import React, { Component } from 'react';
import shortid from 'shortid';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onContactFormInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(
      {
        [name]: value,
        id: shortid.generate(),
      },
      () => {
        this.test();
      }
    );
  };
  addContact = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };
  test = () => {
    // console.log(this.state.name);
  };
  formReset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };
  render() {
    const { title } = this.props;
    const { name, number } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onContactFormInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.onContactFormInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
