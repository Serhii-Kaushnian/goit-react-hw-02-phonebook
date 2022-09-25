import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { title, contactsList, onContactDelete } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {contactsList.map(value => {
            return (
              <li key={value.id}>
                <div>
                  {value.name} : <span>{value.number}</span>
                  <button onClick={onContactDelete} id={value.id} type="button">
                    Delete contact
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
