import React, { Component } from 'react';
import initialContacts from './Components/initialsContacts.json';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  onSubmitData = data => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name === addContact.name)) {
      alert(`${addContact.name} is already in contacts!`);
      return;
    }
    this.setState({
      contacts: [...contacts, addContact],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm onSubmitData={this.onSubmitData} />
        {contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            {contacts.length > 1 && <Filter value={filter} onChangeFilter={this.changeFilter} />}
            <ContactList contacts={filteredContacts} onDeleteContact={this.onDeleteContact} />
          </>
        )}
      </>
    );
  }
}

export default App;
