import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <>
    <span>
      {contact.name}: {contact.number}
    </span>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </>
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
