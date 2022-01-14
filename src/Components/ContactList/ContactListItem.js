import React from 'react';
import { PropTypes } from 'prop-types';
import ContactSectionStyled from './ContactItemStyled';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <ContactSectionStyled>
    <span>
      {contact.name}: {contact.number}
    </span>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </ContactSectionStyled>
);

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
